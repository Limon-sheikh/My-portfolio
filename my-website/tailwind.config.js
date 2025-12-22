/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}",],

  theme: {
    // screens: {
    //   // 'xxs': '360px', // Very small devices
    //   // 'xs': '450px',  // Small phones
    //   // 'xm': '500px',  // Medium phones
    //   'sm': '640px',  // Default Tailwind small
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    extend: {
      colors: {
        primary: "#041616",     // text color Dark blue
        accent: "#b8b260",      // oval green
        hover: "#a19c4f",      // Cyan
        light: "#F8FAFC",       // Light gray
        dark: "#0F172A",        // Deep blackish-blue
        peach: "#FFEDD5",       // Light peach
        gray: "#222831",       // Light peach
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cambodia: ['"Battambang"', 'sans-serif'],
      },

    },
  },
  plugins: [ ]
}