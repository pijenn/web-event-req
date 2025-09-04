const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // purge: [],
  theme: {
    extend: {
      colors: {
        quitewhite: "#f5f5f5",
        coffeetint: "#f1f0e7",
        coffeestain: "#ecdab7",
        sunflower: "#f1ce83",
        wood: "#524033",
        leaf: "#263D2D",
        ungu: "#30162a",
        biru: "#31336C",
        kuning: "#D49A47",
        merah: "#AC424D",
        merahmuda: "#C97D87",
        birumuda: "#8B8CA8",
        kuningtua: "#AA7D3B",
        gray: colors.warmGray,
        rose: colors.rose,
        amber: colors.amber,
        newPurple : "#BE0575",
        newYellow : "#F9D816",
        newOrange : "#FF6611",
        newBlue : "#004159",
        orangeMuda : "#F98C50",
        custbg: "#FDFAE2",
        custorange: "#FF6611",
        yellowBG: "#FDFADB",
        green:"#208B71",
        putih:"#FDFADB",
        orange:"#E87707",
        brightYellow : "#FCC61A",
        greenLight: "#6C9B8B",
        cream: "#FFFCEE", 
        brown: "#F2DEC1",
        raspberry: "#E90658"
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    animation: ["responsive", "hover"],
  },
  plugins: [],
};
