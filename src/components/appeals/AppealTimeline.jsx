import { CheckCircle, Clock, User } from 'lucide-react'
import { formatDateTime } from '../../utils/helpers'

const AppealTimeline = ({ appeal }) => {
  const getStageIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case 'in_progress':
        return <Clock className="h-6 w-6 text-blue-600 animate-pulse" />
      default:
        return <Clock className="h-6 w-6 text-gray-400" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-heading text-2xl font-semibold text-navy-deep mb-6">
        Appeal Progress
      </h3>

      <div className="space-y-8">
        {appeal.timeline.map((stage, index) => (
          <div key={index} className="relative">
            {index < appeal.timeline.length - 1 && (
              <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-300" />
            )}

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getStageIcon(stage.status)}
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-navy-deep text-lg">
                      {stage.stage}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {stage.description}
                    </p>
                  </div>
                  <div className="text-right">
                    {stage.timestamp ? (
                      <p className="text-sm text-gray-500">
                        {formatDateTime(stage.timestamp)}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-400 italic">Pending</p>
                    )}
                  </div>
                </div>

                {stage.status === 'in_progress' && appeal.reviewerName && (
                  <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-3">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">
                          Assigned Reviewer: {appeal.reviewerName}
                        </p>
                        {appeal.estimatedResolutionDate && (
                          <p className="text-xs text-blue-700 mt-1">
                            Estimated decision by: {new Date(appeal.estimatedResolutionDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {appeal.resolution && (
        <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold text-green-900 mb-2">Final Resolution</h4>
          <p className="text-sm text-green-800">{appeal.resolution}</p>
          {appeal.reviewerNotes && (
            <div className="mt-3 pt-3 border-t border-green-200">
              <p className="text-xs text-green-700 font-medium">Reviewer Notes:</p>
              <p className="text-sm text-green-800 mt-1">{appeal.reviewerNotes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AppealTimeline
