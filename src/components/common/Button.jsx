const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const base = 'font-heading font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-1.5'

  const variants = {
    primary: `bg-crimson text-white focus:ring-crimson
      hover:bg-crimson-light hover:shadow-[0_0_18px_rgba(155,28,28,0.45)]`,
    secondary: `bg-navy-deep text-white focus:ring-navy-light
      hover:bg-navy-light`,
    outline: `border border-crimson text-crimson bg-transparent focus:ring-crimson
      hover:bg-crimson hover:text-white`,
  }

  const sizes = {
    small:  'px-3.5 py-1.5 text-xs',
    medium: 'px-5 py-2.5 text-sm',
    large:  'px-7 py-3.5 text-base',
  }

  const disabledStyle = disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabledStyle} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
