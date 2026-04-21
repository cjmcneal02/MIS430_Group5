import { useState } from 'react'
import Button from '../common/Button'
import Card from '../common/Card'
import { decisions } from '../../data'

const AppealForm = ({ preselectedDecisionId, onSubmit }) => {
  const [formData, setFormData] = useState({
    decisionId: preselectedDecisionId || '',
    userStatement: '',
  })
  const [errors, setErrors] = useState({})

  const appealableDecisions = decisions.filter(d => d.appealable)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.decisionId) {
      newErrors.decisionId = 'Please select a decision to appeal'
    }
    if (!formData.userStatement.trim()) {
      newErrors.userStatement = 'Please provide a reason for your appeal'
    } else if (formData.userStatement.trim().length < 20) {
      newErrors.userStatement = 'Please provide at least 20 characters explaining your appeal'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    onSubmit(formData)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="decisionId" className="block text-sm font-medium text-gray-700 mb-2">
            Select Decision to Appeal *
          </label>
          <select
            id="decisionId"
            name="decisionId"
            value={formData.decisionId}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.decisionId
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-crimson'
            }`}
          >
            <option value="">-- Select a decision --</option>
            {appealableDecisions.map(decision => (
              <option key={decision.id} value={decision.id}>
                {decision.id} - {decision.decisionType} ({decision.outcome})
              </option>
            ))}
          </select>
          {errors.decisionId && (
            <p className="mt-1 text-sm text-red-600">{errors.decisionId}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="userStatement" className="block text-sm font-medium text-gray-700 mb-2">
            Reason for Appeal *
          </label>
          <textarea
            id="userStatement"
            name="userStatement"
            value={formData.userStatement}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.userStatement
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-crimson'
            }`}
            placeholder="Please explain why you believe this decision should be reviewed. Be specific and provide any relevant context."
          />
          <div className="flex justify-between items-start mt-1">
            <div>
              {errors.userStatement && (
                <p className="text-sm text-red-600">{errors.userStatement}</p>
              )}
            </div>
            <p className={`text-xs shrink-0 ml-4 ${
              formData.userStatement.length === 0
                ? 'text-gray-400'
                : formData.userStatement.length < 20
                ? 'text-amber-600 font-medium'
                : 'text-green-600'
            }`}>
              {formData.userStatement.length}/20 min
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Your statement will be reviewed by a human moderator.
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Supporting Evidence (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-500">
              File upload placeholder (not functional in prototype)
            </p>
            <p className="text-xs text-gray-400 mt-2">
              You can upload screenshots, logs, or other supporting documents
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>What happens next?</strong> A human reviewer will be assigned to your appeal within 24 hours.
                You can expect a final decision within 5-7 business days.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="submit" variant="primary" size="large">
            Submit Appeal
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default AppealForm
