import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-navy-deep text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Shield className="h-8 w-8 text-crimson" />
            <span className="font-heading text-2xl font-bold">FairPlay Portal</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link
              to="/player"
              className="hover:text-crimson transition-colors font-medium"
            >
              Player Dashboard
            </Link>
            <Link
              to="/developer"
              className="hover:text-crimson transition-colors font-medium"
            >
              Developer Dashboard
            </Link>
            <Link
              to="/appeal/status"
              className="hover:text-crimson transition-colors font-medium"
            >
              Track Appeal
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
