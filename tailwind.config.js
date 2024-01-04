module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000112',
      'very-dark-grey-dark-bg': '#20212c',
      'dark-grey': '#2b2c37',
      'lines-dark': '#3e3f4e',
      'medium-grey': '#828fa3',
      'lines-light': '#e4ebfa',
      'light-grey-light-bg': '#f4f7fd',
      white: '#ffffff',
      'main-purple': '#635fc7',
      'main-purple-hover': '#a8a4ff',
      red: '#ea5555',
      'red-hover': '#ff9898'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
