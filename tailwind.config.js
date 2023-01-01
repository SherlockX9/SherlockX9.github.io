/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
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
          'kanit':['Kanit'],
          'opensan':['Open+Sans'],
          'ubuntu':['Ubuntu'],
          'worksans':['Work+Sans'],
          'ptsan':['PT+Sans'],
        },
    },
  },
  plugins: [],
}
