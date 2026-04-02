import DecisionCard from '../common/DecisionCard'

const PromotionDecisions = ({ decisions, gameName }) => {
  if (decisions.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <p className="text-gray-600 text-sm">No storefront decisions recorded for this game.</p>
      </div>
    )
  }

  return (
    <div className="mt-4">
      <h4 className="font-heading text-lg font-semibold text-navy-deep mb-3">
        Storefront Promotion Decisions for {gameName}
      </h4>
      {decisions.map(decision => (
        <DecisionCard key={decision.id} decision={decision} showAppealButton={true} />
      ))}
    </div>
  )
}

export default PromotionDecisions
