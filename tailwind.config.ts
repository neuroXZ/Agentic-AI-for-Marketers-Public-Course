import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a0442",
          900: "#13007C",
          800: "#2a1aa8",
        },
        gold: {
          400: "#FF4D4D",
          500: "#FF0000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
