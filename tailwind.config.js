/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}' 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}