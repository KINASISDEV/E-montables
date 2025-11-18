/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'header-bg': '#252F3E',
        'primary': '#FF2800',   
        'secondary': '#DCC24C', 
      },
      fontFamily: {
        'brand': ['Audiowide', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
