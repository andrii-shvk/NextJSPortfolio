import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  darkMode: "selector",
  theme: {
    extend: {
      container: {
        screens: {
          sm: '320px',
          md: '768px',
          lg: '900px',
          xl: '1140px',
          '2xl': '1280px',
        },
      },
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
          darkYellowHover: "#333",
          darkYellowActive: "#525151",
        },
        text: {
          light: "#000",
          dark: "#fff",
          lightBrown: "#323232"
        },
        link: {
          primary: "#2085f8",
          hover: "#1a64b9",
        },
        underline: {
          lightFrom: "#fff",
          lightTo: "#FBDC4D",
          darkFrom: "#080701",
          darkTo: "#ac9735",
  
        },
        white: {
          light: "#ffffff",
          dark: "#090f11",
        },
        icons: {
          light: "#74a2b2",
          dark: "#FBDC4D",
        },
        mixitUp: {
          light: "#74abc0",
          hover: "#FF543E",
          active: "#000",
          darkActive: "#FF543E",
        },
        footer: {
          light: "#333",
          dark: "rgb(51 51 51 / 46%)"
        },
        skeleton: {
          gradientDark: '#232D31B7'
        }
      },
      listStyleType: {
        custom: '"\\2014"',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
