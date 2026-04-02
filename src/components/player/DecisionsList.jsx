import DecisionCard from '../common/DecisionCard'

const DecisionsList = ({ decisions }) => {
  if (decisions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-600">No decisions found for your account.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold text-navy-deep mb-4">
        Algorithmic Decisions Affecting Your Account
      </h2>
      <div>
        {decisions.map(decision => (
          <DecisionCard key={decision.id} decision={decision} showAppealButton={true} />
        ))}
      </div>
    </div>
  )
}

export default DecisionsList
