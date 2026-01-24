/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00247D', // Royal Blue
          light: '#3b5bdb',
        },
        secondary: {
          DEFAULT: '#CF142B', // Vibrant Red
        },
        accent: '#FFD700', // Gold
        bg: '#f8f9fa',
        surface: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
