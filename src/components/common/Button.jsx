const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantStyles = {
    primary: 'bg-crimson hover:bg-crimson-light text-white focus:ring-crimson',
    secondary: 'bg-navy-light hover:bg-navy-deep text-white focus:ring-navy-light',
    outline: 'border-2 border-crimson text-crimson hover:bg-crimson hover:text-white focus:ring-crimson',
  }

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
