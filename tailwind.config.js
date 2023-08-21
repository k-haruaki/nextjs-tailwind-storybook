const white = {
  1000: '#FFFFFF',
};

const sea = {
  1200: '#00004F',
  1100: '#000060',
  1000: '#000071',
  900: '#000082',
  800: '#0017C1',
  700: '#0031D8',
  600: '#1A3EE8',
  500: '#264AF4',
  400: '#4979F5',
  300: '#7096F8',
  200: '#9DB7F9',
  100: '#C5D7FB',
  50: '#E8F1FE',
};

const sumi = {
  1200: '#000000',
  1100: '#080808',
  1000: '#111111',
  900: '#1A1A1C',
  800: '#414143',
  700: '#626264',
  600: '#757578',
  500: '#949497',
  400: '#B4B4B7',
  300: '#D8D8DB',
  200: '#E8E8EB',
  100: '#F1F1F4',
  50: '#F8F8FB',
};

const forest = {
  1200: '#032213',
  1100: '#08351F',
  1000: '#0C472A',
  900: '#115A36',
  800: '#197A4B',
  700: '#1D8B56',
  600: '#259D63',
  500: '#2CAC6E',
  400: '#51B883',
  300: '#71C598',
  200: '#9BD4B5',
  100: '#C2E5D1',
  50: '#E6F5EC',
};

const wood = {
  1200: '#662E00',
  1100: '#833B00',
  1000: '#9C4600',
  900: '#B65200',
  800: '#C16800',
  700: '#C87504',
  600: '#CD820A',
  500: '#D18D0F',
  400: '#D69C2B',
  300: '#DCAC4D',
  200: '#E1C383',
  100: '#E7D8B9',
  50: '#F3EEE5',
};

const sun = {
  1200: '#640101',
  1100: '#890101',
  1000: '#AF0000',
  900: '#D50000',
  800: '#EC0000',
  700: '#FA1606',
  600: '#FF220D',
  500: '#FF4B36',
  400: '#FF5838',
  300: '#FF7B5C',
  200: '#FFA28B',
  100: '#FFC8B8',
  50: '#FFE7E6',
};

const primitiveColors = {
  white: white,
  sea: sea,
  sumi: sumi,
  forest: forest,
  wood: wood,
  sun: sun,
};

const semanticColors = {
  text: {
    light: {
      body: primitiveColors.wood[200],
    },
  },
  red: {
    900: '#ff0000',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primitiveColors,
    },
    extend: {
      colors: semanticColors,
      // colors: {
      //   semanticColors,
      //   // red: {
      //   //   900: '#ff0000',
      //   // },
      // },
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
