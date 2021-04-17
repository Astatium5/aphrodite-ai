module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "rose-light": "#FEF2F2",
        rose: "#FDDEDE",
        button: "#AB65B8",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
