module.exports = {
  purge: { content: ["./public/**/*.html","./src/**/*.vue"]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ['responsive'],
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"),require('autoprefixer')],
}
