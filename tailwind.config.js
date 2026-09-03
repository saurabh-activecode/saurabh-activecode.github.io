/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./404.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        ruby: {
          50: '#fff1f2',
          100: '#ffe4e6',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
        },
        slate: {
          850: '#141d2e',
          900: '#0f172a',
          950: '#070b14',
        }
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
