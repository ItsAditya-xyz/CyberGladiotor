/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gainsboro: "rgba(217, 217, 217, 0.1)",
      },
      spacing: {},
      fontFamily: {
        "anek-odia": "'Anek Odia'",
        karantina: "Karantina",
        inter: "Inter",
        "archivo-black": "'Archivo Black'",
        "dela-gothic-one": "'Dela Gothic One'",
      },
      borderRadius: {
        xl: "20px",
        "281xl": "300px",
        "31xl": "50px",
        "81xl": "100px",
        "181xl": "200px",
      },
    },
    fontSize: {
      "7xl": "26px",
      "2xl": "21px",
      base: "16px",
      "81xl": "100px",
      "11xl": "30px",
      "31xl": "50px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
