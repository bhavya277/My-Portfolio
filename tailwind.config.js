/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0B0C10',
          darker: '#07080B',
          card: '#12141C',
          cardHover: '#181B26',
          light: '#F8FAFC',
          lightCard: '#FFFFFF',
        },
        border: {
          dark: 'rgba(255, 255, 255, 0.08)',
          darkHover: 'rgba(255, 255, 255, 0.16)',
          light: 'rgba(15, 23, 42, 0.08)',
        },
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
