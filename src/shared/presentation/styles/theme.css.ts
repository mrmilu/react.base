import { createTheme } from "@vanilla-extract/css";
import { px2rem } from "./utils.css";

export const [theme, vars] = createTheme({
  colors: {
    // basic
    white: "#FFFFFF",
    black: "#000000",
    // grayscale
    gray10: "#EDEDED",
    gray20: "#D9D9D9",
    gray30: "#BFBFC3",
    gray40: "#B4B4B6",
    gray50: "#828283",
    gray60: "#707071",
    gray70: "#5D5D5E",
    gray80: "#4A4A4B",
    gray90: "#222324",
    gray100: "#0C0C0C"
  },
  shadows: {
    one: `0 ${px2rem(4)} ${px2rem(16)} 0 rgb(0 0 0 / 20%)`
  }
});
