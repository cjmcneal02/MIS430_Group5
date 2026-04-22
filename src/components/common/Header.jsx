import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const NAV_LINKS = [
  { path: '/player',         label: 'Player Dashboard' },
  { path: '/developer',      label: 'Developer Dashboard' },
  { path: '/appeal/status',  label: 'Track Appeal' },
]

const Header = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(13, 27, 42, 0.92)' : '#0D1B2A',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(155,28,28,0.25)' : '1px solid rgba(255,255,255,0.04)',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: '64px' }}>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            style={{ textDecoration: 'none' }}
          >
            <div className="relative">
              <Shield
                className="text-crimson"
                style={{
                  width: '28px', height: '28px',
                  transition: 'filter 0.2s ease',
                  filter: 'drop-shadow(0 0 6px rgba(155,28,28,0.5))',
                }}
              />
            </div>
            <span
              className="font-heading font-bold text-white"
              style={{ fontSize: '1.25rem', letterSpacing: '0.02em', lineHeight: 1 }}
            >
              FairPlay
              <span className="text-crimson"> Portal</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                style={{
                  padding: '0.4rem 0.9rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                  color: isActive(path) ? '#EF4444' : 'rgba(255,255,255,0.7)',
                  borderBottom: isActive(path) ? '2px solid #9B1C1C' : '2px solid transparent',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  paddingBottom: '0.5rem',
                }}
                onMouseEnter={e => { if (!isActive(path)) e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { if (!isActive(path)) e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              padding: '0.4rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              color: 'rgba(255,255,255,0.75)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
          >
            {theme === 'dark'
              ? <Sun style={{ width: '18px', height: '18px' }} />
              : <Moon style={{ width: '18px', height: '18px' }} />
            }
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white transition-colors"
            style={{
              padding: '0.4rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
            }}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden animate-slide-down"
          style={{
            borderTop: '1px solid rgba(155,28,28,0.2)',
            background: '#0D1B2A',
            padding: '0.75rem 1rem 1rem',
          }}
        >
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '0.6rem 0.75rem',
                marginBottom: '0.25rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: isActive(path) ? '#EF4444' : 'rgba(255,255,255,0.75)',
                background: isActive(path) ? 'rgba(155,28,28,0.12)' : 'transparent',
                borderLeft: isActive(path) ? '2px solid #9B1C1C' : '2px solid transparent',
                transition: 'background 0.15s ease, color 0.15s ease',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
