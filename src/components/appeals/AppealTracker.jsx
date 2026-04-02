import { useState } from 'react'
import { Search } from 'lucide-react'
import Button from '../common/Button'
import Card from '../common/Card'

const AppealTracker = ({ onSearch }) => {
  const [appealId, setAppealId] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!appealId.trim()) {
      setError('Please enter an Appeal ID')
      return
    }
    setError('')
    onSearch(appealId.trim())
  }

  return (
    <Card>
      <h3 className="font-heading text-2xl font-semibold text-navy-deep mb-4">
        Track Your Appeal
      </h3>
      <p className="text-gray-600 mb-6">
        Enter your Appeal ID to check the status and progress of your appeal.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex-grow">
            <input
              type="text"
              value={appealId}
              onChange={(e) => {
                setAppealId(e.target.value)
                setError('')
              }}
              placeholder="Enter Appeal ID (e.g., APP001)"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>
          <Button type="submit" variant="primary" size="medium">
            <Search className="h-5 w-5 inline mr-2" />
            Search
          </Button>
        </div>
      </form>

      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <strong>Tip:</strong> Your Appeal ID was provided when you submitted your appeal.
          Check your email or the confirmation page. Example format: APP001, APP002, etc.
        </p>
      </div>
    </Card>
  )
}

export default AppealTracker
