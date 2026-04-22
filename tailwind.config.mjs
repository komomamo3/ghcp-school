import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.5rem', sm: '1.5rem', lg: '2rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1280px' },
    },
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      DEFAULT: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.5rem',
      full: '9999px',
    },
    extend: {
      colors: {
        // Surface tokens
        surface: '#f7f9fb',
        'surface-dim': '#d8dadc',
        'surface-bright': '#f7f9fb',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f2f4f6',
        'surface-container': '#eceef0',
        'surface-container-high': '#e6e8ea',
        'surface-container-highest': '#e0e3e5',
        'on-surface': '#191c1e',
        'on-surface-variant': '#45464d',
        'inverse-surface': '#2d3133',
        'inverse-on-surface': '#eff1f3',
        outline: '#76777d',
        'outline-variant': '#c6c6cd',
        'surface-tint': '#565e74',
        // Primary (Deep Navy / Black)
        primary: {
          DEFAULT: '#000000',
          container: '#131b2e',
          fixed: '#dae2fd',
          'fixed-dim': '#bec6e0',
        },
        'on-primary': '#ffffff',
        'on-primary-container': '#7c839b',
        'inverse-primary': '#bec6e0',
        'on-primary-fixed': '#131b2e',
        'on-primary-fixed-variant': '#3f465c',
        // Secondary (Gold)
        secondary: {
          DEFAULT: '#755a26',
          container: '#fdd798',
          fixed: '#ffdea8',
          'fixed-dim': '#e6c183',
        },
        'on-secondary': '#ffffff',
        'on-secondary-container': '#785c28',
        'on-secondary-fixed': '#271900',
        'on-secondary-fixed-variant': '#5b4310',
        // Tertiary
        tertiary: {
          DEFAULT: '#000000',
          container: '#0b1c30',
          fixed: '#d3e4fe',
          'fixed-dim': '#b7c8e1',
        },
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#75859d',
        'on-tertiary-fixed': '#0b1c30',
        'on-tertiary-fixed-variant': '#38485d',
        // Error
        error: { DEFAULT: '#ba1a1a', container: '#ffdad6' },
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        // Background
        background: '#f7f9fb',
        'on-background': '#191c1e',
        'surface-variant': '#e0e3e5',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif"', '"Noto Serif JP"', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
      },
      fontSize: {
        'headline-xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'label-sm': ['0.875rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      spacing: {
        'section': '80px',
      },
      maxWidth: { prose: '68ch' },
      boxShadow: {
        subtle: '0 1px 4px 0 rgba(19,27,46,0.04), 0 1px 2px 0 rgba(19,27,46,0.03)',
        active: '0 4px 16px 0 rgba(19,27,46,0.08), 0 2px 4px 0 rgba(19,27,46,0.05)',
      },
    },
  },
  plugins: [typography],
};
