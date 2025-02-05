/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%, 100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        wave: 'wave 2.5s ease-in-out infinite'
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};