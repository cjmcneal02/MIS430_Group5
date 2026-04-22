import { Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const RESOURCES = [
  { label: 'How It Works',       href: '#' },
  { label: 'Appeal Guidelines',  href: '#' },
  { label: 'Privacy Policy',     href: '#' },
]

const SUPPORT = [
  { label: 'Help Center',           href: '#' },
  { label: 'Contact Us',            href: '#' },
  { label: 'Community Guidelines',  href: '#' },
]

const FooterLink = ({ href, label }) => (
  <li>
    <a
      href={href}
      style={{
        color: 'rgba(255,255,255,0.4)',
        textDecoration: 'none',
        fontSize: '0.85rem',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = '#EF4444' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
    >
      {label}
    </a>
  </li>
)

const Footer = () => (
  <footer style={{ background: '#080F18', borderTop: '1px solid rgba(155,28,28,0.25)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '3.5rem 1rem 2rem' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4" style={{ textDecoration: 'none' }}>
            <Shield className="text-crimson" style={{ width: '22px', height: '22px', filter: 'drop-shadow(0 0 5px rgba(155,28,28,0.5))' }} />
            <span className="font-heading font-bold text-white" style={{ fontSize: '1.1rem' }}>
              FairPlay <span className="text-crimson">Portal</span>
            </span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', lineHeight: 1.7, maxWidth: '22rem' }}>
            Making AI-driven decisions transparent and fair for the gaming community. Every decision — visible. Every appeal — heard.
          </p>
          <div
            style={{
              display: 'inline-block',
              marginTop: '1.25rem',
              padding: '0.3rem 0.75rem',
              border: '1px solid rgba(155,28,28,0.35)',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(155,28,28,0.8)',
            }}
          >
            MIS 430 · Academic Prototype
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4
            className="font-heading font-semibold text-white mb-4"
            style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Resources
          </h4>
          <ul className="space-y-2.5">
            {RESOURCES.map((item) => <FooterLink key={item.label} {...item} />)}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4
            className="font-heading font-semibold text-white mb-4"
            style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Support
          </h4>
          <ul className="space-y-2.5">
            {SUPPORT.map((item) => <FooterLink key={item.label} {...item} />)}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
          &copy; 2026 FairPlay Portal · Culverhouse College of Business
        </p>
        <p style={{ color: 'rgba(155,28,28,0.5)', fontSize: '0.7rem', fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.1em' }}>
          ALGORITHMIC TRANSPARENCY SYSTEM v1.0
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
