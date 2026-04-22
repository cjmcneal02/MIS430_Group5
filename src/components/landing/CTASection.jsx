import { useNavigate } from 'react-router-dom'
import { User, Code, ArrowRight, CheckCircle } from 'lucide-react'

const PLAYER_FEATURES = [
  'View all AI decisions affecting your account',
  'Submit and track human-reviewed appeals',
  'Understand matchmaking & moderation logic',
]

const DEV_FEATURES = [
  'Storefront promotion decision transparency',
  'Algorithmic visibility & placement insights',
  'Clear explanations without exposing IP',
]

const PortalCard = ({ icon: Icon, title, audience, description, features, buttonLabel, onClick, accent }) => (
  <div
    className="relative flex flex-col rounded-none overflow-hidden group cursor-pointer"
    style={{
      background: 'white',
      border: '1px solid #E5E7EB',
      transition: 'box-shadow 0.28s ease, transform 0.28s ease, border-color 0.28s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(155,28,28,0.3)'
      e.currentTarget.style.transform = 'translateY(-6px)'
      e.currentTarget.style.borderColor = 'rgba(155,28,28,0.3)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)'
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.borderColor = '#E5E7EB'
    }}
    onClick={onClick}
  >
    {/* Top accent bar */}
    <div style={{ height: '3px', background: 'linear-gradient(90deg, #7A1414, #9B1C1C, #DC2626)' }} />

    {/* Card body */}
    <div className="flex flex-col flex-1 p-8 lg:p-10">

      {/* Audience label */}
      <div className="flex items-center gap-2 mb-6">
        <div
          style={{
            width: '2.5rem', height: '2.5rem',
            background: 'rgba(155,28,28,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '4px',
          }}
        >
          <Icon className="text-crimson" style={{ width: '1.1rem', height: '1.1rem' }} />
        </div>
        <span
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#9B1C1C',
          }}
        >
          {audience}
        </span>
      </div>

      <h3
        className="font-heading font-bold text-navy-deep mb-3"
        style={{ fontSize: '2rem', lineHeight: 1.1 }}
      >
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mb-8" style={{ maxWidth: '28rem' }}>
        {description}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-3 mb-10 flex-1">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <CheckCircle
              className="text-crimson flex-shrink-0 mt-0.5"
              style={{ width: '0.95rem', height: '0.95rem' }}
            />
            <span className="text-gray-600 text-sm">{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="w-full flex items-center justify-center gap-2 font-heading font-semibold uppercase tracking-wider text-white transition-all duration-200"
        style={{
          padding: '0.875rem 1.5rem',
          background: '#0D1B2A',
          fontSize: '0.9rem',
          letterSpacing: '0.12em',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#9B1C1C'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#0D1B2A'; }}
        onClick={onClick}
      >
        {buttonLabel}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
)

const CTASection = () => {
  const navigate = useNavigate()

  return (
    <section style={{ background: '#F5F6F8', padding: '6rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div style={{ width: '2rem', height: '1px', background: '#9B1C1C' }} />
            <span
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#9B1C1C',
              }}
            >
              Select Your Portal
            </span>
            <div style={{ width: '2rem', height: '1px', background: '#9B1C1C' }} />
          </div>
          <h2 className="font-heading font-bold text-navy-deep" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Who Are You Here For?
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
            FairPlay Portal serves both players and game developers. Choose your role to access the right transparency tools.
          </p>
        </div>

        {/* Portal cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <PortalCard
            icon={User}
            audience="For Players"
            title="Player Dashboard"
            description="See exactly how AI systems affect your account — and challenge any decision you believe was unfair."
            features={PLAYER_FEATURES}
            buttonLabel="Enter Player Portal"
            onClick={() => navigate('/player')}
          />
          <PortalCard
            icon={Code}
            audience="For Developers"
            title="Developer Dashboard"
            description="Understand how the storefront algorithm ranks and promotes your games — with actionable transparency."
            features={DEV_FEATURES}
            buttonLabel="Enter Developer Portal"
            onClick={() => navigate('/developer')}
          />
        </div>
      </div>
    </section>
  )
}

export default CTASection
