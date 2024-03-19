module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_87": "#00000087", "900_7f": "#0000007f", "900_90": "#00000090" },
        white: { A700: "#ffffff", A700_b2: "#ffffffb2", A700_87: "#ffffff87" },
        deep_purple: { A700: "#3d0ef9" },
        gray: { 50: "#f8f7fc", 100: "#f6f6f6", 900: "#222226" },
        blue_gray: { 100: "#d1d4d8", 400: "#8e8e8e", 900: "#2b2d42" },
        deep_orange: { A400: "#f9250f" },
        red: { 900: "#b01b24" },
        green: { 700: "#1eb01b" },
        purple: { 500: "#ad1bb0" },
        orange: { A700: "#f9630e" },
        amber: { A100: "#ffe174" },
        white_A700_4f: "#ffffff4f",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", poppins: "Poppins" },
      opacity: { 0.5: 0.5, 0.6: 0.6 },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #00000000,#000000a5)",
        gradient1: "linear-gradient(180deg, #00000000,#000000)",
        gradient2: "linear-gradient(180deg, #00000000,#000000cc)",
        gradient3: "linear-gradient(180deg, #00000000,#0000007f)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
