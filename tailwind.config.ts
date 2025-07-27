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