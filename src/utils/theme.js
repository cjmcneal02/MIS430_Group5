/**
 * Theme Management Utility
 *
 * Provides functions for managing theme state with localStorage persistence
 * and automatic OS preference detection. Works without JavaScript on initial
 * load thanks to CSS prefers-color-scheme media query.
 */

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto',
}

const STORAGE_KEY = 'fairplay-theme-preference'

/**
 * Gets the user's theme preference from localStorage
 * @returns {string} - 'light', 'dark', or 'auto'
 */
export const getStoredTheme = () => {
  if (typeof window === 'undefined') return THEMES.AUTO

  try {
    return localStorage.getItem(STORAGE_KEY) || THEMES.AUTO
  } catch (error) {
    console.warn('Failed to read theme preference from localStorage:', error)
    return THEMES.AUTO
  }
}

/**
 * Stores the user's theme preference in localStorage
 * @param {string} theme - 'light', 'dark', or 'auto'
 */
export const storeTheme = (theme) => {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch (error) {
    console.warn('Failed to store theme preference in localStorage:', error)
  }
}

/**
 * Gets the system's color scheme preference
 * @returns {string} - 'light' or 'dark'
 */
export const getSystemTheme = () => {
  if (typeof window === 'undefined') return THEMES.LIGHT

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEMES.DARK
    : THEMES.LIGHT
}

/**
 * Resolves the effective theme (handles 'auto' preference)
 * @param {string} preference - 'light', 'dark', or 'auto'
 * @returns {string} - 'light' or 'dark'
 */
export const resolveTheme = (preference) => {
  if (preference === THEMES.AUTO) {
    return getSystemTheme()
  }
  return preference
}

/**
 * Applies the theme to the document root element
 * @param {string} theme - 'light' or 'dark'
 */
export const applyTheme = (theme) => {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  const resolvedTheme = resolveTheme(theme)

  // Remove both theme classes first
  root.classList.remove('theme-light', 'theme-dark')

  // Add the appropriate theme class
  root.classList.add(`theme-${resolvedTheme}`)

  // Store the current theme as a data attribute for CSS/JS access
  root.setAttribute('data-theme', resolvedTheme)
}

/**
 * Initializes the theme system on page load
 * Should be called as early as possible to prevent flash of wrong theme
 */
export const initializeTheme = () => {
  const storedPreference = getStoredTheme()
  const effectiveTheme = resolveTheme(storedPreference)
  applyTheme(effectiveTheme)

  // Listen for system theme changes when preference is 'auto'
  if (storedPreference === THEMES.AUTO && typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e) => {
      const newTheme = e.matches ? THEMES.DARK : THEMES.LIGHT
      applyTheme(newTheme)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else if (mediaQuery.addListener) {
      // Legacy browsers
      mediaQuery.addListener(handleChange)
    }
  }
}

/**
 * Sets the theme and persists the preference
 * @param {string} theme - 'light', 'dark', or 'auto'
 */
export const setTheme = (theme) => {
  storeTheme(theme)
  const effectiveTheme = resolveTheme(theme)
  applyTheme(effectiveTheme)
}

/**
 * Toggles between light and dark themes
 * Note: This doesn't toggle 'auto', it cycles light -> dark -> light
 */
export const toggleTheme = () => {
  const currentTheme = getStoredTheme()
  const resolvedTheme = resolveTheme(currentTheme)

  // Toggle between light and dark
  const newTheme = resolvedTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
  setTheme(newTheme)

  return newTheme
}

/**
 * Gets the current active theme
 * @returns {object} - { preference: 'auto'|'light'|'dark', effective: 'light'|'dark' }
 */
export const getCurrentTheme = () => {
  const preference = getStoredTheme()
  const effective = resolveTheme(preference)

  return {
    preference,
    effective,
  }
}
