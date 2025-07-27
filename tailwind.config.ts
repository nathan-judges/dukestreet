import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'archivo': ['var(--font-archivo)', 'sans-serif'],
        'instrument-serif': ['var(--font-instrument-serif)', 'serif'],
      },
      spacing: {
        '18': '4.5rem', // 72px - for precise navigation height
        '22': '5.5rem', // 88px - for larger navigation height
      },
      fontSize: {
        'nav': ['0.875rem', { lineHeight: '1.25rem' }], // 14px - for navigation links
        'nav-lg': ['1rem', { lineHeight: '1.5rem' }], // 16px - for larger navigation
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

export default config 