/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mobile-image": "url(/assets/images/illustration-sign-up-mobile.svg)",
        "desktop-image": "url(/assets/images/illustration-sign-up-desktop.svg)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(255, 98, 87, 0.25)",
      },
    },
  },
  plugins: [],
};
