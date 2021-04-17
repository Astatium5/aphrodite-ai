module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "rose-light": "#FFF9F9",
        rose: "#F8EFEF",
        button: "#AB65B8",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
