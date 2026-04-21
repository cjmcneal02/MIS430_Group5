/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors (for backwards compatibility)
        'navy-deep': '#0D1B2A',
        'navy-light': '#1B263B',
        'crimson': '#9B1C1C',
        'crimson-light': '#B91C1C',
        'gray-surface': '#F4F4F5',
        'decision-approved': '#10B981',
        'decision-restricted': '#EF4444',
        'decision-review': '#F59E0B',

        // Semantic color system using CSS custom properties
        surface: {
          primary: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          tertiary: 'var(--surface-tertiary)',
          overlay: 'var(--surface-overlay)',
          brand: 'var(--surface-brand)',
          'brand-subtle': 'var(--surface-brand-subtle)',
          accent: 'var(--surface-accent)',
          'accent-hover': 'var(--surface-accent-hover)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          disabled: 'var(--text-disabled)',
          inverse: 'var(--text-inverse)',
          brand: 'var(--text-brand)',
          accent: 'var(--text-accent)',
          link: 'var(--text-link)',
          'link-hover': 'var(--text-link-hover)',
        },
        border: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
          focus: 'var(--border-focus)',
          accent: 'var(--border-accent)',
        },
        interactive: {
          primary: 'var(--interactive-primary)',
          'primary-hover': 'var(--interactive-primary-hover)',
          'primary-active': 'var(--interactive-primary-active)',
          'primary-disabled': 'var(--interactive-primary-disabled)',
          secondary: 'var(--interactive-secondary)',
          'secondary-hover': 'var(--interactive-secondary-hover)',
          'secondary-active': 'var(--interactive-secondary-active)',
          outline: 'var(--interactive-outline)',
          'outline-hover': 'var(--interactive-outline-hover)',
        },
        status: {
          'success-bg': 'var(--status-success-bg)',
          'success-text': 'var(--status-success-text)',
          'success-border': 'var(--status-success-border)',
          'success-icon': 'var(--status-success-icon)',
          'warning-bg': 'var(--status-warning-bg)',
          'warning-text': 'var(--status-warning-text)',
          'warning-border': 'var(--status-warning-border)',
          'warning-icon': 'var(--status-warning-icon)',
          'error-bg': 'var(--status-error-bg)',
          'error-text': 'var(--status-error-text)',
          'error-border': 'var(--status-error-border)',
          'error-icon': 'var(--status-error-icon)',
          'info-bg': 'var(--status-info-bg)',
          'info-text': 'var(--status-info-text)',
          'info-border': 'var(--status-info-border)',
          'info-icon': 'var(--status-info-icon)',
        },
      },
      fontFamily: {
        'heading': ['Rajdhani', 'sans-serif'],
        'body': ['IBM Plex Sans', 'sans-serif'],
      },
      borderWidth: {
        'left-4': '4px',
      },
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme-md': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
        'theme-xl': 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
}
