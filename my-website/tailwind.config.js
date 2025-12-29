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

      // custom type writer start
      animation:{blink: "blink 0.4s step-end infinite",},
      keyframes: {
        blink:{"0%, 100%": {opacity: "1"},
        "50%":{opacity: "0"},
      }},
      // end 

      // color plane start
      colors: {
        primary: "#021114",     // hedding text color
        secondary: "#041616",     // text color Dark blue
        dark_blue: "#284b50",      // footer bg-color
        light_blue: "#335b61",      // footer item linkedin bg-color
        text_C_W: "#FFFFFF",      // text color white
        bg_c_g: "#02a15a",      // go button bg green
        hover_c_g: "#00da78",      // hover color green
        accent: "#b8b260",      // oval green
        hover: "#a19c4f",      // Cyan
      },
      // end 

      // font family start 
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cambodia: ['"Battambang"', 'sans-serif'],
      },
      // end 

    },
  },
  plugins: [ ]
}