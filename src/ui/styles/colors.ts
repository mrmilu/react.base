export type colorsType =
  | "white"
  | "black"
  | "gray10"
  | "gray20"
  | "gray30"
  | "gray40"
  | "gray50"
  | "gray60"
  | "gray70"
  | "gray80"
  | "gray90"
  | "gray100";

export const colors: Record<colorsType, string> = {
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
};
