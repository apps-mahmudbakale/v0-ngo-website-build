import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0369a1',      // Medical blue
        'primary-light': '#0ea5e9',
        'primary-dark': '#0c4a6e',
        accent: '#10b981',       // Healthcare green
        'accent-light': '#34d399',
        'accent-dark': '#047857',
        muted: '#f3f4f6',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
