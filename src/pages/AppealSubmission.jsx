import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Layout from '../components/common/Layout'
import AppealForm from '../components/appeals/AppealForm'
import Button from '../components/common/Button'
import { CheckCircle, X, FileText } from 'lucide-react'
import { generateAppealId } from '../utils/helpers'

const AppealSubmission = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const preselectedDecisionId = location.state?.decisionId

  const [submitted, setSubmitted] = useState(false)
  const [appealId, setAppealId] = useState('')

  const handleSubmit = (formData) => {
    const newAppealId = generateAppealId()
    setAppealId(newAppealId)
    setSubmitted(true)
  }

  const handleCloseModal = () => {
    setSubmitted(false)
  }

  const handleTrackAppeal = () => {
    navigate(`/appeal/${appealId}`)
  }

  return (
    <Layout>
      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">
              <div className="flex justify-center mb-5">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="h-14 w-14 text-green-600" />
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-navy-deep mb-3">
                Appeal Successfully Submitted
              </h2>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 mb-5">
                <p className="text-sm text-gray-600 mb-1">Your Appeal ID:</p>
                <p className="font-heading text-3xl font-bold text-crimson">{appealId}</p>
                <p className="text-xs text-gray-500 mt-1">Save this ID to track your appeal</p>
              </div>

              <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-crimson mr-2">•</span>
                  <span>A human reviewer will be assigned within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-crimson mr-2">•</span>
                  <span>Expect a final decision within 5–7 business days</span>
                </li>
              </ul>

              <div className="flex gap-3">
                <Button variant="outline" size="medium" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" size="medium" onClick={handleTrackAppeal}>
                  Track Appeal
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-navy-deep text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <FileText className="h-10 w-10 text-crimson" />
            <div>
              <h1 className="font-heading text-4xl font-bold">Submit an Appeal</h1>
              <p className="text-gray-300 mt-2">
                Request a human review of an algorithmic decision
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold text-navy-deep mb-2">
            Appeal Process
          </h2>
          <p className="text-gray-600">
            Every appeal is reviewed by a trained human moderator. We take your concerns seriously
            and aim to provide fair and transparent resolution.
          </p>
        </div>

        <AppealForm
          preselectedDecisionId={preselectedDecisionId}
          onSubmit={handleSubmit}
        />
      </div>
    </Layout>
  )
}

export default AppealSubmission
