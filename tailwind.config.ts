import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      bg: {
        // light: "#e2eef1",
        light: "#fff",
        dark: "#0c1214",
      },
      accent: {
        light: "#e2edf4",
        dark: "#D1EDFF",
        lightYellow: "#FBDC4D",
        darkYellowHover: '#333',
        darkYellowActive: '#525151'
      },
      text: {
        light: "#000",
        dark: "#fff",
      },
      link: {
        primary: "#2085f8",
        hover: "#1a64b9",
      },
      white: {
        light: "#ffffff",
        dark: "#090f11",
      },
      icons: {
        light: "#74a2b2",
        dark: "#FBDC4D",
      },
    },
    extend: {
      gridTemplateColumns: {
        main: "1.7fr 0.3fr",
        stack: "reapeat(3, 220px)",
        stackMobile: "repeat(2, minmax(105px, 400px))",
      },
      listStyleType: {
        'custom': '"\\2014"',
      },
    },
  },
  plugins: [],
};
export default config;
