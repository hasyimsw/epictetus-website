const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'sans': ['Patrick Hand', 'Arial', 'sans-serif'], 
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Clink rel='preconnect' href='https://fonts.googleapis.com'%3E%3Clink rel='preconnect' href='https://fonts.gstatic.com' crossorigin%3E%3Clink href='https://fonts.googleapis.com/css2%3Ffamily=Patrick+Hand&display=swap' rel='stylesheet'%3E ")`,
          backgroundRepeat: 'no-repeat'
        }
      }

      addUtilities(utilities);
    })
  ],
}
