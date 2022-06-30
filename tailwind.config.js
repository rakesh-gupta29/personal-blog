module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./blades/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["0.8rem", 1.2],
      base: ["1rem", 1.4],
      lg: ["1.125rem", 1.5],
      xl: ["1.250rem", 1.6],
      "2xl": ["1.5rem", 1.7],
      "3xl": ["2rem", 1.8],
      "4xl": ["2.5rem", 1.9],
      "5xl": ["3rem", 2],
      title: ["3.5rem", 2.1],
    },
    extend: {
      colors: {
        primary: "#1b365d",
      },
      backgroundImage: {
        quote: "url('/bg/quote.svg')",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
