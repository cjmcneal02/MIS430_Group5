const Card = ({ children, className = '', hover = false, accent = false, dark = false }) => {
  const base = dark
    ? 'rounded-none border border-white/8'
    : 'bg-white rounded-sm border border-gray-100'

  const shadow = hover ? 'shadow-theme-md' : 'shadow-theme-sm'

  const hoverStyles = hover
    ? dark
      ? 'transition-all duration-250 hover:-translate-y-1 hover:border-crimson/30 hover:shadow-theme-lg'
      : 'transition-all duration-250 hover:-translate-y-1 hover:shadow-theme-lg hover:border-gray-200'
    : ''

  const accentBar = accent
    ? 'relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-crimson before:to-transparent'
    : ''

  return (
    <div
      className={`${base} ${shadow} ${hoverStyles} ${accentBar} p-6 ${className}`}
      style={dark ? { background: 'rgba(27,38,59,0.6)' } : undefined}
    >
      {children}
    </div>
  )
}

export default Card
