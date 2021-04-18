module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "purple-light": "#EEE0F0",
        purple: "#CCA2D4",
        button: "#ab65b8",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
