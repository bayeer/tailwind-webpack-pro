/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  content: [],
  // content: [
  //   './src/**/*.{js,ts,jsx,tsx}'
  // ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
