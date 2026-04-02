const Badge = ({ children, color = 'gray', size = 'medium' }) => {
  const colorStyles = {
    gray: 'bg-gray-100 text-gray-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-800',
  }

  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-2.5 py-1 text-sm',
    large: 'px-3 py-1.5 text-base',
  }

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colorStyles[color]} ${sizeStyles[size]}`}>
      {children}
    </span>
  )
}

export default Badge
