import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",   // Dark Corporate Slate
          light: "#F8FAFC",  // High-contrast clean background text
          accent: "#0EA5E9", // LogicMinds Electric Blue
        },
      },
    },
  },
  plugins: [],
};
export default config;
