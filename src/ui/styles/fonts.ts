import type { FlattenSimpleInterpolation } from "styled-components";
import { createGlobalStyle, css } from "styled-components";
import LatoBold from "@/src/ui/assets/fonts/Lato-Bold.ttf";
import LatoLight from "@/src/ui/assets/fonts/Lato-Light.ttf";
import LatoRegular from "@/src/ui/assets/fonts/Lato-Regular.ttf";

export const FontStyled = createGlobalStyle`
  /* Lato */
  @font-face {
    font-family: Lato;
    src: url(${LatoRegular}) format('truetype');
    font-display: optional;
    font-weight: 400;
  }

  @font-face {
    font-family: Lato;
    src: url(${LatoBold}) format('truetype');
    font-display: optional;
    font-weight: 700;
  }

  @font-face {
    font-family: Lato;
    src: url(${LatoLight}) format('truetype');
    font-display: optional;
    font-weight: 300;
  }
`;

declare type FontType = "Lato";

export const fonts: Record<FontType, FlattenSimpleInterpolation> = {
  Lato: css`
    font-family: Lato, sans-serif;

    * {
      font-family: Lato, sans-serif;
    }
  `
};
