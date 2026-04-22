import { useNavigate } from 'react-router-dom'
import { Shield, ChevronRight } from 'lucide-react'

const HERO_STATS = [
  { value: '12,847', label: 'Appeals Resolved' },
  { value: '45K+',   label: 'Active Users' },
  { value: '100%',   label: 'Human Reviewed' },
]

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-navy-deep relative overflow-hidden" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center' }}>

      {/* Background textures */}
      <div className="absolute inset-0 line-grid-bg" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 80% at 15% 60%, rgba(155,28,28,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 30%, rgba(27,38,59,0.4) 0%, transparent 70%)'
      }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(155,28,28,0.8) 40%, rgba(220,38,38,0.9) 50%, rgba(155,28,28,0.8) 60%, transparent 100%)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Overline tag */}
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0ms' }}
            >
              <div className="w-8 h-px bg-crimson" />
              <span style={{
                color: '#9B1C1C',
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
              }}>
                Algorithmic Transparency Platform
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-heading text-white leading-none mb-0"
              style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 700, lineHeight: 0.88 }}
            >
              <span className="block animate-fade-in-up" style={{ animationDelay: '80ms' }}>
                FAIR
              </span>
              <span className="block text-shimmer animate-fade-in-up" style={{ animationDelay: '180ms' }}>
                PLAY
              </span>
              <span
                className="block animate-fade-in-up"
                style={{ animationDelay: '280ms', color: 'rgba(255,255,255,0.45)', fontSize: '0.55em', fontWeight: 500, letterSpacing: '0.12em' }}
              >
                PORTAL
              </span>
            </h1>

            {/* Crimson divider */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '360ms', width: '5rem', height: '2px', background: '#9B1C1C', margin: '2rem 0' }}
            />

            {/* Body copy */}
            <p
              className="text-gray-300 text-lg leading-relaxed max-w-md animate-fade-in-up"
              style={{ animationDelay: '440ms' }}
            >
              Every AI-driven decision affecting your gaming experience —<br />
              <span className="text-white font-medium">visible, explained, and challengeable.</span>
            </p>
            <p
              className="text-gray-500 text-sm mt-3 max-w-sm animate-fade-in-up"
              style={{ animationDelay: '520ms' }}
            >
              From matchmaking to content moderation, we hold automated systems accountable to human oversight.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '620ms' }}>
              <button
                onClick={() => navigate('/player')}
                className="group flex items-center gap-2 font-heading font-semibold uppercase tracking-wider text-white transition-all duration-200"
                style={{
                  padding: '0.875rem 2rem',
                  background: '#9B1C1C',
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#B91C1C'; e.currentTarget.style.boxShadow = '0 0 24px rgba(155,28,28,0.55)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#9B1C1C'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Player Portal
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/developer')}
                className="group flex items-center gap-2 font-heading font-semibold uppercase tracking-wider text-white transition-all duration-200"
                style={{
                  padding: '0.875rem 2rem',
                  border: '1px solid rgba(255,255,255,0.18)',
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  background: 'transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(155,28,28,0.7)'; e.currentTarget.style.color = '#EF4444'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'white'; }}
              >
                Developer Portal
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quick stats */}
            <div
              className="mt-12 pt-8 animate-fade-in"
              style={{
                animationDelay: '800ms',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-bold text-crimson" style={{ fontSize: '1.5rem' }}>
                    {stat.value}
                  </div>
                  <div style={{
                    color: 'rgba(255,255,255,0.35)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginTop: '0.25rem',
                    fontFamily: 'IBM Plex Mono, monospace',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Shield Visual ── */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative" style={{ width: '340px', height: '340px' }}>

              {/* Expanding rings */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border"
                  style={{
                    inset: 0,
                    borderColor: 'rgba(155,28,28,0.25)',
                    animation: `ringExpand ${2.5 + i * 0.9}s ease-out ${i * 0.55}s infinite`,
                  }}
                />
              ))}

              {/* Static outer ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: '-24px',
                  border: '1px solid rgba(155,28,28,0.12)',
                }}
              />

              {/* Shield icon — float wrapper, glow on inner icon */}
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <div className="relative glow-crimson">
                  <Shield
                    className="text-crimson"
                    style={{ width: '200px', height: '200px', strokeWidth: 0.8 }}
                  />
                  {/* Internal labels on shield */}
                  <div className="absolute flex flex-col items-center gap-1" style={{ top: '42%', left: 0, right: 0 }}>
                    {['SYSTEM', 'AUDIT', 'ACTIVE'].map((word) => (
                      <div
                        key={word}
                        className="font-heading text-white text-center"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.4em',
                          opacity: 0.45,
                        }}
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI system label — right */}
              <div className="absolute" style={{ right: '-130px', top: '20%' }}>
                <div className="flex items-center gap-2">
                  <div style={{ width: '40px', height: '1px', background: 'rgba(155,28,28,0.4)' }} />
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em' }}>
                    MATCHMAKING.AI
                  </span>
                </div>
              </div>

              {/* AI system label — left */}
              <div className="absolute" style={{ left: '-130px', top: '58%' }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em' }}>
                    MODERATION.AI
                  </span>
                  <div style={{ width: '40px', height: '1px', background: 'rgba(155,28,28,0.4)' }} />
                </div>
              </div>

              {/* AI system label — bottom right */}
              <div className="absolute" style={{ right: '-118px', bottom: '18%' }}>
                <div className="flex items-center gap-2">
                  <div style={{ width: '40px', height: '1px', background: 'rgba(155,28,28,0.4)' }} />
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em' }}>
                    PROMOTION.AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{
        background: 'linear-gradient(to bottom, transparent, rgba(13,27,42,0.4))'
      }} />
    </section>
  )
}

export default Hero
