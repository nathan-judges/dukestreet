/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette from PRD
        'dark': '#000510',
        'beige': '#F9F7F1',
        'yellow': '#F8C807',
        'blue': '#3971F9',
        'red': '#F84F07',
        'pink': '#D974FB',
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'instrument-serif': ['Instrument Serif', 'serif'],
      },
      spacing: { // Added for precise navigation height
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },
      fontSize: { // Added for navigation links
        'nav': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'nav-lg': ['1rem', { lineHeight: '1.5rem' }], // 16px
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 