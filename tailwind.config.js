 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('C:\ProjectPH\programming-hero-3rd-assignment\c1-assets')",
          'footer-texture': "url('/c1-assets/hero')",
        }
      }
    }
  }