/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tall': { 'raw': '(min-height: 800px)' },
      'short': { 'raw': '(max-height: 600px)' },
      'landscape': { 'raw': '(orientation: landscape)' },
      'portrait': { 'raw': '(orientation: portrait)' },
    },
    extend: {
      colors: {
        // Base colors
        text: {
          primary: '#1A1B20',
          secondary: '#4A4B52',
          light: '#FFFFFF',
        },
        surface: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          accent: '#FF4D4D',
        },
        accent: {
          DEFAULT: '#FF4D4D',
          light: '#FF6666',
          dark: '#E63E3E',
        },
        // Section colors
        hero: {
          DEFAULT: '#4ECDC4',  // Teal
        },
        about: {
          DEFAULT: '#FFD166', // Sun Yellow
        },
        services: {
          DEFAULT: '#C3F584', // Mint Green
        },
        projects: {
          DEFAULT: '#9D4EDD', // Soft Purple
        },
        contact: {
          DEFAULT: '#6A4C93', // Deep Lavender
        },
        
        // Button states
        button: {
          primary: '#4ECDC4',
          hover: '#3CBFB6',
          text: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#0C0D11',
          light: '#1A1B20',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Atkinson Hyperlegible Next', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['2rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'fluid-xs': 'var(--font-size-xs)',
        'fluid-sm': 'var(--font-size-sm)',
        'fluid-base': 'var(--font-size-base)',
        'fluid-lg': 'var(--font-size-lg)',
        'fluid-xl': 'var(--font-size-xl)',
        'fluid-2xl': 'var(--font-size-2xl)',
        'fluid-3xl': 'var(--font-size-3xl)',
        'fluid-4xl': 'var(--font-size-4xl)',
        'fluid-5xl': 'var(--font-size-5xl)',
        'fluid-hero': 'var(--font-size-hero)',
      },
      fontWeight: {
        h1: '200',
        h2: '300',
        h3: '400',
        body: '300',
      },
      borderRadius: {
        'card': '32px',
        'button': '12px',
        'section': '2.5rem',
        'inset': '2rem',
      },
      boxShadow: {
        'card': '0 6px 28px rgba(0, 0, 0, 0.08)',
        'section': '0 12px 40px rgba(0, 0, 0, 0.06)',
        'inset': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        'section': '12rem',
        'section-sm': '6rem',
        'section-lg': '16rem',
        'section-xl': '20rem',
        'container': '4rem',
        'inset': '2rem',
        'fluid-xs': 'var(--space-xs)',
        'fluid-sm': 'var(--space-sm)',
        'fluid-md': 'var(--space-md)',
        'fluid-lg': 'var(--space-lg)',
        'fluid-xl': 'var(--space-xl)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      padding: {
        'section': '12rem',
        'section-sm': '6rem',
        'section-lg': '16rem',
        'section-xl': '20rem',
        'container': '4rem',
      },
      margin: {
        'section': '12rem',
        'section-sm': '6rem',
        'section-lg': '16rem',
        'section-xl': '20rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(145deg, #4ECDC4, #FF6B6B)',
        'gradient-about': 'linear-gradient(145deg, #FFD166, #A5D8FF)',
        'gradient-services': 'linear-gradient(145deg, #C3F584, #FF9F1C)',
        'gradient-projects': 'linear-gradient(145deg, #9D4EDD, #FDCB82)',
        'gradient-contact': 'linear-gradient(145deg, #6A4C93, #FF6B81)',
        'gradient-mesh': 'radial-gradient(circle at 30% 30%, #A5D8FF, #FDCB82)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        glow: 'glow 3s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '0.5' }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}; 