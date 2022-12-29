/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.html'
  ],
  theme: {
    extend: {
        backgroundImage:{
          'image1': "url('../img/landimage.jpg')",
        },
        fontFamily:{
          'ralewind':['Raleway'],
          'overpass':['Overpass'],
          'roboto':['Roboto'],
          'balsamic':['Kanit'],
        },
    },
  },
  plugins: [],
}
