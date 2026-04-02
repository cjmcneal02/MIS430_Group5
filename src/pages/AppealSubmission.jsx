import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Layout from '../components/common/Layout'
import AppealForm from '../components/appeals/AppealForm'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { CheckCircle } from 'lucide-react'
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

    setTimeout(() => {
      navigate(`/appeal/${newAppealId}`)
    }, 3000)
  }

  if (submitted) {
    return (
      <Layout>
        <div className="bg-navy-deep text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold">Appeal Submitted</h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>

              <h2 className="font-heading text-3xl font-bold text-navy-deep mb-4">
                Appeal Successfully Submitted
              </h2>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Your Appeal ID:</p>
                <p className="font-heading text-4xl font-bold text-crimson">{appealId}</p>
              </div>

              <div className="text-left bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-navy-deep mb-3">What happens next?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-crimson mr-2">•</span>
                    <span>A human reviewer will be assigned to your appeal within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crimson mr-2">•</span>
                    <span>You will receive an email notification when your appeal is under review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crimson mr-2">•</span>
                    <span>You can expect a final decision within 5-7 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crimson mr-2">•</span>
                    <span>Track your appeal status anytime using your Appeal ID</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Redirecting you to the appeal tracker...
              </p>

              <Button variant="primary" onClick={() => navigate(`/appeal/${appealId}`)}>
                View Appeal Status
              </Button>
            </div>
          </Card>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="bg-navy-deep text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">Submit an Appeal</h1>
          <p className="text-gray-300 mt-2">
            Request a human review of an algorithmic decision
          </p>
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
