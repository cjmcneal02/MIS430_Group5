import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Users, Clock, Shield, ChevronRight } from 'lucide-react'

const STATS = [
  {
    icon: CheckCircle,
    value: '12,847',
    label: 'Appeals Resolved',
    sub: 'Since platform launch',
  },
  {
    icon: Users,
    value: '45,000+',
    label: 'Active Users',
    sub: 'Players & developers',
  },
  {
    icon: Clock,
    value: '5–7 Days',
    label: 'Avg. Review Time',
    sub: 'Human reviewer turnaround',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Human Reviewed',
    sub: 'Every appealed decision',
  },
]

const COMMITMENTS = [
  {
    title: 'Mandatory Human Oversight',
    body: 'Every algorithmic decision affecting players can be reviewed by a trained human reviewer. Automation scales us — accountability requires people.',
  },
  {
    title: 'Explanation Without Exposure',
    body: 'We surface decision rationale and data factors without exposing proprietary model weights or competitive intelligence.',
  },
  {
    title: 'Individual Case Evaluation',
    body: 'Each appeal is assessed on its own merits. Reviewers evaluate context, history, and extenuating circumstances — not just pattern-matching.',
  },
]

const StatCard = ({ icon: Icon, value, label, sub, isVisible }) => (
  <div
    className="text-center"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    }}
  >
    <div className="flex justify-center mb-3">
      <div
        style={{
          width: '2.5rem', height: '2.5rem',
          background: 'rgba(155,28,28,0.15)',
          border: '1px solid rgba(155,28,28,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '2px',
        }}
      >
        <Icon className="text-crimson" style={{ width: '1.1rem', height: '1.1rem' }} />
      </div>
    </div>
    <div
      className="font-heading font-bold text-white"
      style={{ fontSize: '2.25rem', lineHeight: 1 }}
    >
      {value}
    </div>
    <div
      className="text-white font-medium mt-1"
      style={{ fontSize: '0.85rem' }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.6rem',
        letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.3)',
        textTransform: 'uppercase',
        marginTop: '0.35rem',
      }}
    >
      {sub}
    </div>
  </div>
)

const TrustSignals = () => {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.2 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Stats Band (dark) ── */}
      <section
        ref={statsRef}
        className="relative overflow-hidden"
        style={{ background: '#0D1B2A', padding: '5rem 0' }}
      >
        <div className="absolute inset-0 dot-grid-bg" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(155,28,28,0.6), transparent)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(155,28,28,0.4), transparent)'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div style={{ width: '2rem', height: '1px', background: '#9B1C1C' }} />
            <span
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(155,28,28,0.9)',
              }}
            >
              Platform Metrics
            </span>
            <div style={{ width: '2rem', height: '1px', background: '#9B1C1C' }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <StatCard {...stat} isVisible={statsVisible} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Commitment (light) ── */}
      <section style={{ background: 'white', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-14">
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
                Our Commitments
              </span>
              <div style={{ width: '2rem', height: '1px', background: '#9B1C1C' }} />
            </div>
            <h2 className="font-heading font-bold text-navy-deep" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}>
              Built on Trust and Transparency
            </h2>
            <p className="text-gray-500 mt-3 text-base">
              FairPlay Portal exists because we believe algorithmic systems must be accountable to the people they affect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {COMMITMENTS.map((item) => (
              <div
                key={item.title}
                className="relative"
                style={{
                  padding: '2rem',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderTop: '3px solid #9B1C1C',
                }}
              >
                <h3 className="font-heading font-semibold text-navy-deep mb-3" style={{ fontSize: '1.2rem' }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div
            className="max-w-3xl mx-auto mt-14 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              padding: '2rem 2.5rem',
              background: '#0D1B2A',
            }}
          >
            <div>
              <div className="font-heading font-semibold text-white text-lg">
                Ready to explore your decisions?
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Select a portal above to get started with your FairPlay account.
              </div>
            </div>
            <a
              href="#portal"
              className="flex items-center gap-2 font-heading font-semibold uppercase tracking-wider text-white text-sm flex-shrink-0"
              style={{ color: '#EF4444' }}
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrustSignals
