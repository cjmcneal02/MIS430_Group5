import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../utils/helpers'
import AppealStatusBadge from '../common/AppealStatusBadge'
import Card from '../common/Card'
import Button from '../common/Button'

const AppealHistory = ({ appeals }) => {
  const navigate = useNavigate()

  if (appeals.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="font-heading text-2xl font-semibold text-navy-deep mb-4">
          Appeal History
        </h2>
        <Card>
          <p className="text-gray-600 text-center">You have not submitted any appeals yet.</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <h2 className="font-heading text-2xl font-semibold text-navy-deep mb-4">
        Appeal History
      </h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Appeal ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Decision ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submitted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appeals.map(appeal => (
              <tr key={appeal.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy-deep">
                  {appeal.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {appeal.decisionId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {formatDate(appeal.submitDate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <AppealStatusBadge status={appeal.appealStatus} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => navigate(`/appeal/${appeal.id}`)}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppealHistory
