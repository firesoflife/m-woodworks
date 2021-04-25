module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green: {
          light: '#b9d3dc',
          DEFAULT: '#006b68',
          dark: '#2c5b6c',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#4b4f54',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
