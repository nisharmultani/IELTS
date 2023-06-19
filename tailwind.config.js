/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000', // explore primary
        white: '#FFFFFF',

        // explore module primary colors
        gray: {
          50: '#F7F7F7',
          100: '#EBEBEB',
          200: '#D1D1D1',
          300: '#B8B8B8',
          400: '#9E9E9E',
          500: '#858585',
          600: '#6B6B6B', // secondary
          700: '#424242',
          800: '#212121',
        },
        coolGray: {
          50: '#FCFCFD',
          100: '#F9FAFB',
          200: '#F2F4F7',
          300: '#EAECF0',
          400: '#D0D5DD',
          500: '#98A2B3', // secondary
          600: '#667085',
          700: '#475467',
          800: '#1D2939',
        },
  
        // buidl module primary colors
        orange: {
          50: '#FDF4F2',
          100: '#F9E2DC',
          200: '#F1BFB1',
          300: '#E99D86',
          400: '#E2795A',
          500: '#DA552F', // buidl primary
          600: '#B64220',
          700: '#8B3219',
          800: '#682512',
        },
  
        // invest module primary colors
        purple: {
          50: '#F4F3FC',
          100: '#E0DFF6',
          200: '#BAB6EC',
          300: '#948EE1',
          400: '#6E66D6',
          500: '#483ECC',
          600: '#362DA9', // invest primary
          700: '#292281',
          800: '#1F1A61',
        },
  
        // tertiary red
        red: {
          50: '#FEF1F0',
          100: '#FDDBD8',
          200: '#FAAEA8',
          300: '#F88078',
          400: '#F55347',
          500: '#F22617', // error
          600: '#CB180B',
          700: '#9B1208',
          800: '#740E06',
        },
  
        // tertiary yellow
        yellow: {
          50: '#FFFCF0',
          100: '#FFF7D7',
          200: '#FEEDA4',
          300: '#FEE472',
          400: '#FDDA3F',
          500: '#FDD00D', // warning
          600: '#D4AD02',
          700: '#A28402',
          800: '#796301',
        },
  
        // tertiary green
        green: {
          50: '#F4FAF5',
          100: '#E3F3E3',
          200: '#BFE3C0',
          300: '#9BD49E',
          400: '#78C47B',
          500: '#54B558', // success
          600: '#419544',
          700: '#317234',
          800: '#255527',
        },
      },
    },
  },
  plugins: [],
}
