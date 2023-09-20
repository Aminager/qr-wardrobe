/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ekbrown": "#C98C70",
        "eklightbrown": "#E3B587",
        "ekblue": "#314357",
        "eklightblue": "#456672",
      },
    },
    fontFamily: {
      Jomol: ['Jomolhari'],
      sans: [...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('daisyui')],
}

