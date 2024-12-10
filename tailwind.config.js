/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        inter_medium: ["InterMedium"],
        inter_semibold: ["InterSemibold"],
        inter_bold: ["InterBold"],
        gelica_bold: ["GelicaBold"],
        dmsans_medium: ["DMSansMedium"],
      },
      colors: {
        success: "#44B410",
      },
    },
  },
  plugins: [],
};
