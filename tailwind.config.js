/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myColorGrey": "#EDF0F2",
        "myColorDarkBlue": "#0C3960",
        "myColorLightGrey": "#dfe2e3",
        "myColorLightGreen": "#B7E1C1",
        "myColorLightRoze": "#EFBAC4"
      }
    },
  },
  plugins: [],
}

