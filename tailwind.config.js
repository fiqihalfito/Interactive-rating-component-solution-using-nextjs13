/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)"
        },
        secondary: {
          white: "hsl(0, 0%, 100%)",
          lightGrey: "hsl(217, 12%, 63%)",
          mediumGrey: "hsl(216, 12%, 54%)",
          darkBlue: "hsl(213, 19%, 18%)",
          veryDarkBlue: "hsl(216, 12%, 8%)",
        }
      },
      fontFamily: {
        overpass: ['"Overpass"', "sans-serif"]
      }
    },
  },
  plugins: [],
}