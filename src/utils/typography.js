import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.49,
  scaleRatio: 2.80,
  paragraphSpacing: 0.25,
  headerFontFamily: [
    "Cuprum",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", 
    "Helvetica Neue", 
    "sans-serif"],
  bodyGray: 13,
  bodyGrayHue: "slate",
  googleFonts: [
    {
      name: "Cuprum",
      styles: [
        "700",
      ],
    },
    {
      name: "Open Sans",
      styles: [
        "400",
        "400i",
        "700",
        "700i",
      ],
    },
  ],
})

export default typography