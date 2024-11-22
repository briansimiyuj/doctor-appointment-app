/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        "primary-bg": "#007BFF",  
        "secondary-bg": "#F8F9FA",
        "primary-text": "#212529",
        "secondary-text": "#6C757D",
        "link-text": "#007BFF", 
        "primary-btn": "#007BFF",
        "secondary-btn": "#28A745",
        "error-text": "#DC3545",
        "warning-text": "#FFC107",
        "border-color": "#E9ECEF"
      },

      gridTemplateColumns:{
        "auto": "repeat(auto-fill, minmax(250px, 1fr))",
      }

    },
  },
  plugins: [],
}

