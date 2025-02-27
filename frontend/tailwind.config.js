/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark blue
        secondary: '#3B82F6', // Blue
        danger: '#EF4444', // Red
        warning: '#F59E0B', // Yellow
        success: '#10B981', // Green
      },
    },
  },
  plugins: [],
}

