import { useState } from 'react'
import { Search } from 'lucide-react'
import Button from '../common/Button'
import Card from '../common/Card'
import { appeals } from '../../data'

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
    onSearch(appealId.trim().toUpperCase())
  }

  return (
    <Card>
      <h3 className="font-heading text-2xl font-semibold text-navy-deep mb-4">
        Track Your Appeal
      </h3>
      <p className="text-gray-600 mb-6">
        Enter or select your Appeal ID to check the status and progress of your appeal.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex-grow">
            <input
              type="text"
              list="appeal-ids"
              value={appealId}
              onChange={(e) => {
                setAppealId(e.target.value)
                setError('')
              }}
              placeholder="Type or select Appeal ID (e.g., APP001)"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <datalist id="appeal-ids">
              {appeals.map(a => (
                <option key={a.id} value={a.id}>
                  {a.id} — {a.appealStatus}
                </option>
              ))}
            </datalist>
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
          <strong>Tip:</strong> Click the input field to see your existing appeals, or type an Appeal ID directly.
        </p>
      </div>
    </Card>
  )
}

export default AppealTracker
