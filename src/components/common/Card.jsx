const Card = ({ children, className = '', hover = false }) => {
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-200' : ''

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

export default Card
