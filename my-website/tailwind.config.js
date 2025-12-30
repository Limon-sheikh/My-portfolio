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
        secondary: "#041616",     // text color
        hover_d_blue: "#407a83",      // contact form hover
        dark_blue: "#284b50",      // footer bg-color
        light_blue: "#32565ef5",      // footer item linkedin bg-color
        hover_c_l_b: "#32565ef5",      // footer item linkedin bg-color
        text_C_W: "#FFFFFF",      // text color white
        bg_c_g: "#02a15a",      // go button bg green
        hover_c_g: "#08C471",      // hover color green
        accent: "#b8b260",      // oval green
        hover: "#a19c4f",      // Cyan
        sec_one_bg_c: "",       // section bg color one
        sec_tow_bg_c: "",       // section bg color tow
      },
      // colors: {
      //   primary: '#284b50',
      //   primaryDark: '#1e3a3f',
      //   primaryLight: '#3f6b72',

      //   accent: '#f4b860',
      //   accentStrong: '#e36414',

      //   textDark: '#1f2933',
      //   textMuted: '#6b7280',

      //   bgLight: '#f5f7f8',
      //   card: '#ffffff',
      //   borderLight: '#d1d5db',
      // },
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