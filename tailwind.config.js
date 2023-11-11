/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primaryColor: "#0067FF",
          yellowColor: "#FEB60D",
          purpleColor: "#9771FF",
          irisBlueColor: "#01B5C5",
          headingColor: "#181A1E",
          textColor: "#4E545F",
        },
  
        boxShadow: {
          panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
          shadowOne: "10px 10px 19px #000000, -10px -10px 19px #fff2f2",
          shadowtwo: "1px 7px 15px #000000de, 5px -20px 26px #18181800",
          
        },
      },
    },
    plugins: [],
  };