

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColorButton: '#D9AA52',
        borderColor: '#C2DCF2',
        button: '#734A32',
        footer: '#11689A',
        buttonSuscribe: '#D0A144'
      },
      width: {
        'custom-width': '30rem', 
        'extra-wide': '40rem',   
      },
      height: {
        'custom-height': '20rem', 
        'extra-tall': '30rem',  
      },
      margin: {
        'custom-left': '10rem',  
        'custom-right': '3rem',
      },
      borderRadius:{
        'borderInput': '5px'
      },
    },
  },
  plugins: [],
}

