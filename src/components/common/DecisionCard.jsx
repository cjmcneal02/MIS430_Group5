import { useNavigate } from 'react-router-dom'
import { AlertCircle, CheckCircle, Clock } from 'lucide-react'
import Button from './Button'
import Badge from './Badge'
import { formatDate } from '../../utils/helpers'
import { DECISION_COLORS } from '../../utils/constants'

const DecisionCard = ({ decision, showAppealButton = true }) => {
  const navigate = useNavigate()
  const colors = DECISION_COLORS[decision.outcome] || DECISION_COLORS.approved

  const getIcon = () => {
    switch (decision.outcome) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'restricted':
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-yellow-600" />
    }
  }

  const getOutcomeText = () => {
    switch (decision.outcome) {
      case 'approved':
        return 'Approved'
      case 'restricted':
        return 'Restricted'
      default:
        return 'Under Review'
    }
  }

  const handleAppeal = () => {
    navigate('/appeal/submit', { state: { decisionId: decision.id } })
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 ${colors.border} hover:shadow-lg transition-shadow`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          {getIcon()}
          <div>
            <h3 className="font-heading text-xl font-semibold text-navy-deep">
              {decision.decisionType}
            </h3>
            <p className="text-sm text-gray-500">
              Decision Date: {formatDate(decision.decisionDate)}
            </p>
          </div>
        </div>
        <Badge color={decision.outcome === 'approved' ? 'green' : decision.outcome === 'restricted' ? 'red' : 'yellow'}>
          {getOutcomeText()}
        </Badge>
      </div>

      <div className={`${colors.bg} rounded-md p-4 mb-4`}>
        <p className={`text-sm ${colors.text}`}>
          {decision.explanation}
        </p>
      </div>

      {decision.restrictionDuration && (
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Duration:</span> {decision.restrictionDuration}
            {decision.restrictionExpired && <span className="ml-2 text-green-600">(Expired)</span>}
          </p>
        </div>
      )}

      {decision.promotionTier && (
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Promotion Tier:</span> {decision.promotionTier}
          </p>
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Decision ID: {decision.id} | Model: {decision.modelVersion}
        </div>
        {decision.appealable && showAppealButton && (
          <Button variant="outline" size="small" onClick={handleAppeal}>
            Submit Appeal
          </Button>
        )}
        {!decision.appealable && (
          <span className="text-sm text-gray-500 italic">
            This decision is not appealable
          </span>
        )}
      </div>
    </div>
  )
}

export default DecisionCard
