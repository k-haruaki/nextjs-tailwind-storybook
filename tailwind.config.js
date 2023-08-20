/** @type {import('tailwindcss').Config} */

const { resolve } = require('path');
const pColorsPath = resolve(__dirname, 'src/config/primitiveColor.ts');
const sColorsPath = resolve(__dirname, 'src/config/semanticColor.ts');
const { primitiveColors } = require(pColorsPath);
const { semanticColors } = require(sColorsPath);

module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primitiveColors,
    },
    extend: {
      colors: {
        semanticColors,
        // text: {
        //   light: {
        //     // body: colors.sumi[900],
        //     450: '#1EA7FD',
        //   },
        // },
        // blue: {
        //   450: '#1EA7FD',
        // },
        red: {
          100: '#ff00dd',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      inner: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
