module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary : '#00bcd4',
        'primary-dark': '#0D0D0D',
        'primary-light': '#F2F2F2',
        'primary-dark-hover': '#0D0D0D',
        'primary-light-hover': '#F2F2F2',

      },
    },
  },
  plugins: [],
}

