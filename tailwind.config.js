const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        "2lg": "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      spacing: {
        90: "22rem",
        100: "30rem",
        105: "35rem",
        110: "40rem",
        115: "45rem",
        120: "50rem",
        125: "55rem",
        130: "60rem",
        135: "65rem",
        140: "70rem",
        145: "75rem",
        150: "80rem",
      },

      fontFamily: {
        cairo: "'Cairo', sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
