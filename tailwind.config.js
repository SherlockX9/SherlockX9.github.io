/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.html'
  ],
  theme: {
    extend: {
        backgroundImage:{
          'image1': "url('../img/landimage.jpg')",
        }
    },
  },
  plugins: [],
}
