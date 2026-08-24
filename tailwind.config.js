/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#f5e6b8',
          100: '#f0d99a',
          200: '#e8c87a',
          300: '#d4af37',
          400: '#c4a035',
          500: '#b8962e',
          600: '#a08228',
          700: '#8a6e22',
        },
        dark: {
          50: '#1a1a1a',
          100: '#141414',
          200: '#121212',
          300: '#0f0f0f',
          400: '#0a0a0a',
          500: '#080808',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f5e6b8 50%, #b8962e 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #f5e6b8 100%)',
      },
    },
  },
  plugins: [],
};