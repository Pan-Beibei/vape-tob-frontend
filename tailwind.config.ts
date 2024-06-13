import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        mono: ["var(--font-arima)"],
        openSans: ["var(--font-open-sans)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
};
export default config;
