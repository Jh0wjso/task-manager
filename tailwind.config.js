/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },
      colors:{
        green: {
          300: "#00B37E",  
          600: "#00875F",  
          900: "#015F43",  
        },
        blue: {
          500: '#81F8F7'
        },
        orange:{
          500: 'FBA94C'
        },
        red:{
          500: '#F75A68'
        },
        gray:{
          600: "#292828",
          700: '#121214'
        }
      }
    },
  },
  plugins: [],
}
