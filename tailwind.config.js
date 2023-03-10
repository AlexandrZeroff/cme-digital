/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'th-primary': '#154FA2',
        'th-secondary': '#46BFB2'
      },
      backgroundImage: {
        'header':'url("assets/header.jpg")',
      }
    },
  },
  plugins: [],
}
