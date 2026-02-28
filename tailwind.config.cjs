/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 1.2s ease-out',
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slow-zoom': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
  plugins: [],
}