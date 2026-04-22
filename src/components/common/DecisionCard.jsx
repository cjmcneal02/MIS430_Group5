import { useNavigate } from 'react-router-dom'
import { AlertCircle, CheckCircle, Clock, CheckCircle2 } from 'lucide-react'
import Button from './Button'
import Badge from './Badge'
import { formatDate } from '../../utils/helpers'
import { DECISION_COLORS } from '../../utils/constants'
import { getAppealByDecision } from '../../data'

const BORDER_COLORS = {
  approved:   '#10B981',
  restricted: '#9B1C1C',
  review:     '#D97706',
  overturned: '#3B82F6',
}

const DecisionCard = ({ decision, showAppealButton = true }) => {
  const navigate = useNavigate()
  const existingAppeal = getAppealByDecision(decision.id)

  const isAppealOverturned = () =>
    existingAppeal &&
    existingAppeal.appealStatus === 'Resolved' &&
    existingAppeal.resolution &&
    existingAppeal.resolution.toLowerCase().includes('overturned')

  const effectiveOutcome = isAppealOverturned() ? 'overturned' : decision.outcome
  const colors = DECISION_COLORS[effectiveOutcome] || DECISION_COLORS.approved

  const borderColor = isAppealOverturned()
    ? BORDER_COLORS.overturned
    : decision.outcome === 'approved'
      ? BORDER_COLORS.approved
      : decision.outcome === 'restricted'
        ? BORDER_COLORS.restricted
        : BORDER_COLORS.review

  const getIcon = () => {
    if (isAppealOverturned()) return <CheckCircle2 className="h-5 w-5 text-blue-500" />
    switch (decision.outcome) {
      case 'approved':    return <CheckCircle className="h-5 w-5" style={{ color: '#10B981' }} />
      case 'restricted':  return <AlertCircle className="h-5 w-5 text-crimson" />
      default:            return <Clock className="h-5 w-5" style={{ color: '#D97706' }} />
    }
  }

  const getOutcomeText = () => {
    if (isAppealOverturned()) return 'Appeal Overturned'
    switch (decision.outcome) {
      case 'approved':    return 'Approved'
      case 'restricted':  return 'Restricted'
      default:            return 'Under Review'
    }
  }

  const getAppealStatusBadgeColor = () => {
    if (!existingAppeal) return null
    if (existingAppeal.appealStatus === 'Pending')     return 'yellow'
    if (existingAppeal.appealStatus === 'UnderReview') return 'blue'
    if (existingAppeal.appealStatus === 'Resolved')    return 'green'
    return 'gray'
  }

  const getAppealStatusLabel = () => {
    if (!existingAppeal) return null
    if (existingAppeal.appealStatus === 'UnderReview') return 'Appeal Under Review'
    return `Appeal ${existingAppeal.appealStatus}`
  }

  return (
    <div
      className="bg-white mb-4 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        border: `1px solid #E5E7EB`,
        borderLeft: `3px solid ${borderColor}`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.04)'; }}
    >
      <div style={{ padding: '1.5rem' }}>
        {/* Header row */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {getIcon()}
            <div>
              <h3 className="font-heading font-semibold text-navy-deep" style={{ fontSize: '1.15rem', lineHeight: 1.2 }}>
                {decision.decisionType}
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.78rem', marginTop: '0.15rem' }}>
                Decision Date: {formatDate(decision.decisionDate)}
              </p>
            </div>
          </div>
          <Badge
            color={
              isAppealOverturned()
                ? 'blue'
                : decision.outcome === 'approved'
                  ? 'green'
                  : decision.outcome === 'restricted'
                    ? 'red'
                    : 'yellow'
            }
          >
            {getOutcomeText()}
          </Badge>
        </div>

        {/* Explanation block */}
        <div
          className={`rounded-none mb-4 ${colors.bg}`}
          style={{ padding: '1rem', borderLeft: `2px solid ${borderColor}` }}
        >
          {isAppealOverturned() && (
            <div className="mb-3 pb-3" style={{ borderBottom: '1px solid rgba(59,130,246,0.2)' }}>
              <p className="text-sm font-semibold text-blue-800 mb-1">
                ✓ This decision was appealed and reversed
              </p>
              <p className="text-xs text-blue-600">
                {existingAppeal.resolution} (Resolved on {formatDate(existingAppeal.resolutionDate)})
              </p>
            </div>
          )}
          <p className={`text-sm ${colors.text}`}>
            {isAppealOverturned() && <span className="font-semibold">Original Decision: </span>}
            {decision.explanation}
          </p>
        </div>

        {/* Duration */}
        {decision.restrictionDuration && !isAppealOverturned() && (
          <div className="mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Duration:</span>{' '}
              {decision.restrictionDuration}
              {decision.restrictionExpired && (
                <span className="ml-2" style={{ color: '#10B981' }}>(Expired)</span>
              )}
            </p>
          </div>
        )}

        {/* Promotion tier */}
        {decision.promotionTier && (
          <div className="mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Promotion Tier:</span> {decision.promotionTier}
            </p>
          </div>
        )}

        {/* Footer row */}
        <div
          className="flex justify-between items-center pt-4"
          style={{ borderTop: '1px solid #F3F4F6' }}
        >
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: '#9CA3AF', letterSpacing: '0.08em' }}>
            {decision.id} · {decision.modelVersion}
          </div>

          {decision.appealable && showAppealButton && existingAppeal && (
            <div className="flex items-center gap-3">
              <Badge color={getAppealStatusBadgeColor()}>{getAppealStatusLabel()}</Badge>
              <Button variant="outline" size="small" onClick={() => navigate(`/appeal/${existingAppeal.id}`)}>
                Track Appeal
              </Button>
            </div>
          )}
          {decision.appealable && showAppealButton && !existingAppeal && (
            <Button variant="outline" size="small" onClick={() => navigate('/appeal/submit', { state: { decisionId: decision.id } })}>
              Submit Appeal
            </Button>
          )}
          {!decision.appealable && (
            <span style={{ fontSize: '0.78rem', color: '#9CA3AF', fontStyle: 'italic' }}>
              Not appealable
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default DecisionCard
