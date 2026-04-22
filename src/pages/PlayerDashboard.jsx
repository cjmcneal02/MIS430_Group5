import Layout from '../components/common/Layout'
import PlayerStats from '../components/player/PlayerStats'
import DecisionsList from '../components/player/DecisionsList'
import AppealHistory from '../components/player/AppealHistory'
import { useDecisions } from '../hooks/useDecisions'
import { useAppeals } from '../hooks/useAppeals'
import { User } from 'lucide-react'

const PlayerDashboard = () => {
  const userId = 'P001'
  const { decisions, totalCount, appealableCount } = useDecisions(userId)
  const { appeals, pendingCount } = useAppeals(userId)

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
              <User className="text-crimson" style={{ width: '1.25rem', height: '1.25rem' }} />
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
                Player Portal
              </div>
              <h1 className="font-heading font-bold text-white" style={{ fontSize: '2.25rem', lineHeight: 1 }}>
                Player Dashboard
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.35rem', fontSize: '0.9rem' }}>
                Welcome back, <span className="text-white">Alex Mercer</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ padding: '2.5rem 1rem' }}
      >
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
