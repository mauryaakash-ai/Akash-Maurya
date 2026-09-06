import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#fafafa',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        editorial: {
          bg: '#fbfbfb',
          darkBg: '#0d1117',
          card: '#ffffff',
          darkCard: '#161b22',
          border: '#e2e8f0',
          darkBorder: '#30363d',
          text: '#0f172a',
          darkText: '#f0f6fc',
          muted: '#64748b',
          darkMuted: '#8b949e',
          accent: '#1e40af', // Deep research blue
          accentLight: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'IBM Plex Mono', 'monospace'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
export default config
