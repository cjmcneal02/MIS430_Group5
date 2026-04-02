import { FileText, AlertTriangle, CheckCircle } from 'lucide-react'
import Card from '../common/Card'

const PlayerStats = ({ decisionsCount, appealableCount, pendingAppealsCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Decisions</p>
            <p className="text-2xl font-heading font-bold text-navy-deep">{decisionsCount}</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-100 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Appealable</p>
            <p className="text-2xl font-heading font-bold text-navy-deep">{appealableCount}</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pending Appeals</p>
            <p className="text-2xl font-heading font-bold text-navy-deep">{pendingAppealsCount}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PlayerStats
