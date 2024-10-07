import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["neuropol", fontFamily],
      },
      textShadow: {
        DEFAULT: "0 0 10px #31cbf4",
        yellow: "0 0 10px #FDD125",
      },
      colors: {
        "blue-light": "#31cbf4",
        "yellow-light": "#FDD125",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": value => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      )
    }),
  ],
}
