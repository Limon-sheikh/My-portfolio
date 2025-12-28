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
        primary: "#06272e",     // hedding text color Dark blue
        secondary: "#041616",     // text color Dark blue
        dark_blue: "#284b50",      // footer bg-color
        light_blue: "#335b61",      // footer item linkedin bg-color
        accent: "#b8b260",      // oval green
        hover: "#a19c4f",      // Cyan
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