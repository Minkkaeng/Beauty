/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'natural-green': '#3A5A40',
        'natural-beige': '#DAD7CD',
        'natural-cream': '#F4F1DE',
        'leaf-green': '#588157',
        'soft-earth': '#A3B18A',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
