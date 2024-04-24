import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#101010",
      secondaryBackground: "#1d1d1d",
      white: "#ffff",
    },
    extend: {
      fontFamily: {
        jersey: ["var(--font-jersey)"],
        kanit: ["var(--font-kanit)"],
      },
      screens: {
        tablet: "700px",
        laptop: "1024px",
        desktop: "1380px",
      },
    },
  },
  plugins: [],
};
export default config;
