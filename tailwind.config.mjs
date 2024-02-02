/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-red": "#993333",
      },
      backgroundImage: {
        home: "url('/img/cessna-pilot-center-el-paso-tx.webp')",
        "home-mobile": "url('/img/cessna-pilot-center-el-paso-tx-mobile.webp')",
        "two-cessna": "url('/img/two-cessna-red-arrow-KDNA-santa-teresa.webp')",
        "our-story": "url('/img/our-story/banner.webp')",
        "our-team": "url('/img/our-team/banner.webp')",
        "our-fleet": "url('/img/our-fleet/banner.webp')",
        maintenance: "url('/img/maintenance/banner.webp')",
        "new-to-flying": "url('/img/new-to-flying/banner.jpg')",
        "university-program": "url('/img/university-program/banner.webp')",
        "training-courses": "url('/img/cessna-outside-hangar-juarez-mx.webp')",
        "discovery-flight":
          "url('/img/discovery-flight/discovery-flight-banner.webp')",
        "cfi-and-student": "url('/img/discovery-flight/cfi-and-student.webp')",
      },
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-1/3": "calc(100vh / 3)",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
        "screen-mobile": "92vh", //depends on menu height
      }),
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
