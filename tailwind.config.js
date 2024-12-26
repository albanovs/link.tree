/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
      },
      colors: {
        'custom-blue': '#D9AFD9',
      },
    },
  },
  plugins: [],
}