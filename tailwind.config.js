/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#2C3E50',
        'electric-blue': '#3498DB',
        'light-gray': '#ECF0F1',
      },
    },
  },
  plugins: [],
}

