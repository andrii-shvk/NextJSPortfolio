import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{ts,tsx}"],
    darkMode: 'selector',
    theme: {
        colors: {
            bg: {
                light: "#e2eef1",
                dark: "#0c1214",
            },
            accent: {
                light: "#EFF7FC",
                dark: "#5ed3f3",
                primary: "#FBDC4D",
            },
            text: {
                light: "#fff",
                dark: "#000",
            },
            icons: {
                light: "#5ed3f3",
                dark: "#74a2b2",
            },
        },
        extend: {
            gridTemplateColumns: {
                main: "1.7fr 0.3fr",
                stack: "reapeat(3, 220px)",
                stackMobile: "repeat(2, minmax(105px, 400px))",
            },
        },
    },
    plugins: [],
};
export default config;
