import typographyPlugin from '@tailwindcss/typography'
import vidstackPlugin from '@vidstack/react/tailwind.cjs'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,md}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: 'var(--source-sans)',
        display: 'var(--font-space-grotesk)',
        logo: 'var(--font-argon)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        primary: '##00A97D',
        secondary: '#05714F',
        accent: '#018A5E',
      },
    },
  },
  plugins: [typographyPlugin, vidstackPlugin],
} satisfies Config
