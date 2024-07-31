/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'it': {'max': '399px'}, // Custom breakpoint for less than 400px
        'on': {'max': '551px'}, // Custom breakpoint for less than 400px
        'ont': {'max': '661px'}, // Custom breakpoint for less than 400px
        'ot': {'max': '852px'}, // Custom breakpoint for less than 400px
        'om': {'max': '767px'}, // Custom breakpoint for less than 400px
        
        'from': {'max': '800px'}, // Custom breakpoint for less than 400px
        'rom': {'max': '770px'}, // Custom breakpoint for less than 400px
        'to': {'min': '399px'}, // Custom breakpoint for less than 400px
      },
    },
  },
  plugins: [],
}

