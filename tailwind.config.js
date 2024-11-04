/** @type {import('tailwindcss').Config} */

module.exports = {
  /* Se añaden los tipos y ubicacion de archivos que usaran Tailwind */
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* Son añadidas fuentes nuevas para que Tailwind use */
      fontFamily: {
        "raleway": ["Raleway", "sans-serif"],
        "oswald": ["Oswald", "sans-serif"],
      },
      screens: {
        'scroll': '880px',
      }
    },
  },
  plugins: [],
}

