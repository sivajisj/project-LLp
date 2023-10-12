/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',  // <-- Add this line to enable JIT mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': {
          '500': '#33ccff'
          // ... add other shades if you want
        }
        // ... add other custom colors or modify existing ones
      }
    },
  },
  plugins: [],
}
