import Layout from '../components/common/Layout'
import GameCard from '../components/developer/GameCard'
import PromotionDecisions from '../components/developer/PromotionDecisions'
import { getGamesByDeveloper, getDecisionsByGame } from '../data'
import { Briefcase } from 'lucide-react'

const DeveloperDashboard = () => {
  const developerId = 'D001' // Nadia Volkov
  const games = getGamesByDeveloper(developerId)

  return (
    <Layout>
      <div className="bg-navy-deep text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Briefcase className="h-10 w-10 text-crimson" />
            <div>
              <h1 className="font-heading text-4xl font-bold">Developer Dashboard</h1>
              <p className="text-gray-300 mt-2">Welcome back, Nadia Volkov | Vostok Indie</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="font-heading text-3xl font-semibold text-navy-deep mb-2">
            Your Games
          </h2>
          <p className="text-gray-600">
            View storefront promotion decisions and visibility status for your published titles.
          </p>
        </div>

        {games.map(game => {
          const gameDecisions = getDecisionsByGame(game.id)
          return (
            <div key={game.id} className="mb-8">
              <GameCard game={game} />
              <PromotionDecisions decisions={gameDecisions} gameName={game.title} />
            </div>
          )
        })}

        {games.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">You haven't published any games yet.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default DeveloperDashboard
