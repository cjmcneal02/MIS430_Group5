import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/common/Layout'
import AppealTracker from '../components/appeals/AppealTracker'
import AppealTimeline from '../components/appeals/AppealTimeline'
import AppealStatusBadge from '../components/common/AppealStatusBadge'
import Card from '../components/common/Card'
import { getAppealById, getDecisionById } from '../data'
import { formatDate } from '../utils/helpers'

const AppealStatus = () => {
  const { appealId: urlAppealId } = useParams()
  const [searchedAppealId, setSearchedAppealId] = useState(urlAppealId || '')
  const [notFound, setNotFound] = useState(false)

  const appeal = searchedAppealId ? getAppealById(searchedAppealId) : null
  const decision = appeal ? getDecisionById(appeal.decisionId) : null

  const handleSearch = (id) => {
    setSearchedAppealId(id)
    const foundAppeal = getAppealById(id)
    setNotFound(!foundAppeal)
  }

  return (
    <Layout>
      <div className="bg-navy-deep text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">Appeal Status Tracker</h1>
          <p className="text-gray-300 mt-2">
            Check the progress of your appeal
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <AppealTracker onSearch={handleSearch} />
        </div>

        {notFound && (
          <Card>
            <div className="text-center py-8">
              <p className="text-red-600 font-semibold mb-2">Appeal Not Found</p>
              <p className="text-gray-600">
                No appeal found with ID: <span className="font-mono">{searchedAppealId}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Please check your Appeal ID and try again. Appeal IDs are case-sensitive.
              </p>
            </div>
          </Card>
        )}

        {appeal && !notFound && (
          <>
            <Card className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-navy-deep mb-2">
                    Appeal {appeal.id}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Submitted: {formatDate(appeal.submitDate)}
                  </p>
                </div>
                <AppealStatusBadge status={appeal.appealStatus} size="large" />
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Related Decision</p>
                    <p className="font-semibold text-navy-deep">
                      {appeal.decisionId} - {decision?.decisionType}
                    </p>
                  </div>
                  {appeal.estimatedResolutionDate && appeal.appealStatus !== 'Resolved' && (
                    <div>
                      <p className="text-sm text-gray-600">Estimated Resolution</p>
                      <p className="font-semibold text-navy-deep">
                        {formatDate(appeal.estimatedResolutionDate)}
                      </p>
                    </div>
                  )}
                  {appeal.resolutionDate && (
                    <div>
                      <p className="text-sm text-gray-600">Resolution Date</p>
                      <p className="font-semibold text-navy-deep">
                        {formatDate(appeal.resolutionDate)}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-sm text-gray-600 mb-2">Your Statement</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{appeal.userStatement}</p>
                </div>
              </div>
            </Card>

            <AppealTimeline appeal={appeal} />
          </>
        )}

        {!appeal && !notFound && !searchedAppealId && (
          <Card>
            <div className="text-center py-8">
              <p className="text-gray-600">
                Enter an Appeal ID above to view the status and timeline of your appeal.
              </p>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  )
}

export default AppealStatus
