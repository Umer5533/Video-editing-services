/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-skyblue-rgb': 'rgb(226, 239, 234)',
        'custom-blue-rgb': 'rgb(0, 43, 128)',
        'custom-pink-rgb': 'rgb(199, 77, 214)',
        'custom-lightblue-rgb': 'rgb(72, 179, 216)',
        'custom-darkblue-rgb': 'rgb(25, 30, 64)',
        'custom-lightgray-rgb': 'rgb(242, 242, 242)',
      },
      boxShadow: {
        'custom-inset-2xl': 'inset 0 -50px 50px -35px rgb(0 0 0 / 0.25)'
      }
    },
  },
  plugins: [],
}

