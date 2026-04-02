import Layout from '../components/common/Layout'
import PlayerStats from '../components/player/PlayerStats'
import DecisionsList from '../components/player/DecisionsList'
import AppealHistory from '../components/player/AppealHistory'
import { useDecisions } from '../hooks/useDecisions'
import { useAppeals } from '../hooks/useAppeals'

const PlayerDashboard = () => {
  const userId = 'P001' // Alex Mercer
  const { decisions, totalCount, appealableCount } = useDecisions(userId)
  const { appeals, pendingCount } = useAppeals(userId)

  return (
    <Layout>
      <div className="bg-navy-deep text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">Player Dashboard</h1>
          <p className="text-gray-300 mt-2">Welcome back, Alex Mercer</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PlayerStats
          decisionsCount={totalCount}
          appealableCount={appealableCount}
          pendingAppealsCount={pendingCount}
        />

        <DecisionsList decisions={decisions} />

        <AppealHistory appeals={appeals} />
      </div>
    </Layout>
  )
}

export default PlayerDashboard
