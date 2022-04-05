import type { FlattenSimpleInterpolation } from "styled-components";
import { createGlobalStyle, css } from "styled-components";

export const FontStyled = createGlobalStyle`
  /* Lato */
  @font-face {
    font-family: Lato;
    src: url("/assets/fonts/Lato-Regular.ttf") format('truetype');
    font-display: optional;
    font-weight: 400;
  }

  @font-face {
    font-family: Lato;
    src: url("/assets/fonts/Lato-Bold.ttf") format('truetype');
    font-display: optional;
    font-weight: 700;
  }

  @font-face {
    font-family: Lato;
    src: url("/assets/fonts/Lato-Light.ttf") format('truetype');
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
