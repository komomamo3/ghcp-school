import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1200px' },
    },
    extend: {
      colors: {
        paper: '#FAF7F2',
        ink: { DEFAULT: '#1F1B16', soft: '#3A332B', mute: '#6B6358' },
        sumi: '#1F1B16',
        beige: { 50: '#FBF8F3', 100: '#F3EEE4', 200: '#E5DFD4', 300: '#D2C9B6' },
        rule: '#E5DFD4',
        accent: { DEFAULT: '#8C7A5B', dark: '#6E5F45' },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
        en: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightj: '0.02em', widej: '0.12em', wider2: '0.18em' },
      maxWidth: { prose: '68ch' },
    },
  },
  plugins: [typography],
};
