import { useState, useEffect } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { getCurrentTheme, setTheme, THEMES } from '../../utils/theme'

/**
 * ThemeToggle Component
 *
 * Provides a user interface for switching between light, dark, and auto themes.
 * Features:
 * - Visual indication of current theme
 * - Smooth transitions
 * - Accessible keyboard navigation
 * - Persists preference to localStorage
 */
const ThemeToggle = () => {
  const [theme, setThemeState] = useState(() => getCurrentTheme())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Update state when theme changes (e.g., via system preference)
    const checkTheme = () => {
      setThemeState(getCurrentTheme())
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkTheme)

    return () => mediaQuery.removeEventListener('change', checkTheme)
  }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    setThemeState(getCurrentTheme())
    setIsOpen(false)
  }

  const themeOptions = [
    { value: THEMES.LIGHT, label: 'Light', icon: Sun },
    { value: THEMES.DARK, label: 'Dark', icon: Moon },
    { value: THEMES.AUTO, label: 'Auto', icon: Monitor },
  ]

  const currentOption = themeOptions.find((opt) => opt.value === theme.preference)
  const CurrentIcon = currentOption?.icon || Monitor

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-colors hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2 focus:ring-offset-navy-deep"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
      >
        <CurrentIcon className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu */}
          <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-navy-light border border-neutral-200 dark:border-navy-600 z-20 overflow-hidden">
            {themeOptions.map((option) => {
              const Icon = option.icon
              const isActive = option.value === theme.preference

              return (
                <button
                  key={option.value}
                  onClick={() => handleThemeChange(option.value)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    isActive
                      ? 'bg-crimson-100 dark:bg-crimson-900/20 text-crimson-800 dark:text-crimson-400'
                      : 'hover:bg-neutral-50 dark:hover:bg-navy-700 text-neutral-700 dark:text-neutral-200'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{option.label}</span>
                  {isActive && (
                    <svg
                      className="ml-auto h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default ThemeToggle
