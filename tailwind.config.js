/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "test-blue": "#0052cc",
        "test-black": "#171717",
        "test-error": "#de350b",
        "test-gray": "#8f92a1"
      },
      screens:{
        "xs": "350px"
      },
      fontSize: {
        'xxs': "0.625rem"
      }
    },
  },
  plugins: [],
}