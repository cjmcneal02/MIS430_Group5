import Layout from '../components/common/Layout'
import GameCard from '../components/developer/GameCard'
import PromotionDecisions from '../components/developer/PromotionDecisions'
import { getGamesByDeveloper, getDecisionsByGame } from '../data'
import { Briefcase } from 'lucide-react'

const DeveloperDashboard = () => {
  const developerId = 'D001'
  const games = getGamesByDeveloper(developerId)

  return (
    <Layout>
      {/* Page header */}
      <div
        className="relative overflow-hidden"
        style={{ background: '#0D1B2A', padding: '2.5rem 0' }}
      >
        <div className="absolute inset-0 line-grid-bg opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(155,28,28,0.7), transparent)'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4">
            <div
              style={{
                width: '2.75rem', height: '2.75rem',
                background: 'rgba(155,28,28,0.15)',
                border: '1px solid rgba(155,28,28,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Briefcase className="text-crimson" style={{ width: '1.25rem', height: '1.25rem' }} />
            </div>
            <div>
              <div style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(155,28,28,0.8)',
                marginBottom: '0.2rem',
              }}>
                Developer Portal
              </div>
              <h1 className="font-heading font-bold text-white" style={{ fontSize: '2.25rem', lineHeight: 1 }}>
                Developer Dashboard
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.35rem', fontSize: '0.9rem' }}>
                Welcome back, <span className="text-white">Nadia Volkov</span>
                <span style={{ color: 'rgba(255,255,255,0.25)', margin: '0 0.4rem' }}>·</span>
                Vostok Indie
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ padding: '2.5rem 1rem' }}
      >
        <div className="mb-8">
          <h2 className="font-heading font-bold text-navy-deep mb-1" style={{ fontSize: '1.5rem' }}>
            Your Games
          </h2>
          <p className="text-gray-500 text-sm">
            Storefront promotion decisions and visibility status for your published titles.
          </p>
        </div>

        {games.map((game) => {
          const gameDecisions = getDecisionsByGame(game.id)
          return (
            <div key={game.id} className="mb-10">
              <GameCard game={game} />
              <PromotionDecisions decisions={gameDecisions} gameName={game.title} />
            </div>
          )
        })}

        {games.length === 0 && (
          <div
            className="text-center"
            style={{
              padding: '3rem',
              background: 'white',
              border: '1px solid #E5E7EB',
            }}
          >
            <p className="text-gray-500">You haven't published any games yet.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default DeveloperDashboard
