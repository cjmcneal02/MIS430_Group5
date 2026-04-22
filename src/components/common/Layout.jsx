import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-gray-surface">
      {showHeader && <Header />}
      <main className="flex-grow">
        <div key={pathname} className="animate-fade-in-up">
          {children}
        </div>
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
