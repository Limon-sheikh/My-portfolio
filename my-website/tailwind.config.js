/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}",],

  theme: {
    extend: {
      
      colors: {
        primary: "#1E293B",     // Dark blue
        secondary: "#3B82F6",   // Sky blue
        accent: "#b8b260",      // Cyan
        light: "#F8FAFC",       // Light gray
        dark: "#0F172A",        // Deep blackish-blue
        soft: "#E0F2FE",        // Soft light blue
        peach: "#FFEDD5",       // Light peach
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

    },
  },
  plugins: [ ]
}