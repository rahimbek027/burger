import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        container: 'clamp(10px, 5%, 75px)',
      },
      maxWidth: {
        'screen-1920': '1920px',
      },
      minWidth: {
        screen: '320px',
      },
    },
  },
  plugins: [],
} satisfies Config;
