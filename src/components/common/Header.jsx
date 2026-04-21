import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { path: '/player', label: 'Player Dashboard' },
  { path: '/developer', label: 'Developer Dashboard' },
  { path: '/appeal/status', label: 'Track Appeal' },
]

const Header = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header className="bg-navy-deep text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Shield className="h-8 w-8 text-crimson" />
            <span className="font-heading text-2xl font-bold">FairPlay Portal</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-colors pb-1 ${
                  isActive(path)
                    ? 'text-crimson border-b-2 border-crimson'
                    : 'hover:text-crimson'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 px-3 rounded-md font-medium transition-colors ${
                isActive(path)
                  ? 'bg-crimson text-white'
                  : 'hover:bg-white/10'
              }`}
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
