import { useState, useEffect } from 'react'
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react'

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!target) return
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])
  return count
}

const STAT_CONFIGS = [
  {
    key: 'decisionsCount',
    icon: FileText,
    label: 'Total Decisions',
    sub: 'Affecting your account',
    iconColor: '#3B82F6',
    iconBg: 'rgba(59,130,246,0.1)',
    accentColor: '#3B82F6',
  },
  {
    key: 'appealableCount',
    icon: AlertTriangle,
    label: 'Appealable',
    sub: 'Eligible for review',
    iconColor: '#D97706',
    iconBg: 'rgba(217,119,6,0.1)',
    accentColor: '#D97706',
  },
  {
    key: 'pendingAppealsCount',
    icon: CheckCircle,
    label: 'Pending Appeals',
    sub: 'Awaiting resolution',
    iconColor: '#10B981',
    iconBg: 'rgba(16,185,129,0.1)',
    accentColor: '#10B981',
  },
]

const StatCard = ({ icon: Icon, value, label, sub, iconColor, iconBg, accentColor }) => {
  const displayValue = useCountUp(value)
  return (
    <div
      className="bg-white transition-all duration-200"
      style={{
        padding: '1.5rem',
        border: '1px solid #E5E7EB',
        borderTop: `3px solid ${accentColor}`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div className="flex items-center gap-4">
        <div style={{
          width: '3rem', height: '3rem',
          background: iconBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '4px', flexShrink: 0,
        }}>
          <Icon style={{ width: '1.25rem', height: '1.25rem', color: iconColor }} />
        </div>
        <div>
          <p style={{ color: '#6B7280', fontSize: '0.78rem', marginBottom: '0.2rem' }}>{label}</p>
          <p className="font-heading font-bold text-navy-deep" style={{ fontSize: '1.75rem', lineHeight: 1 }}>{displayValue}</p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', color: '#9CA3AF', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{sub}</p>
        </div>
      </div>
    </div>
  )
}

const PlayerStats = ({ decisionsCount, appealableCount, pendingAppealsCount }) => {
  const values = { decisionsCount, appealableCount, pendingAppealsCount }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      {STAT_CONFIGS.map((cfg, i) => (
        <div key={cfg.key} className="animate-fade-in-up" style={{ animationDelay: `${i * 200}ms` }}>
          <StatCard {...cfg} value={values[cfg.key]} />
        </div>
      ))}
    </div>
  )
}

export default PlayerStats
