import { createGlobalStyle } from "styled-components";
import { ResetCSS } from "@/src/ui/styles/reset";
import { colors } from "./colors";
import { fonts, FontStyled } from "./fonts";
import { typography } from "@/src/ui/styles/typography";
import { px2rem } from "@/src/ui/styles/utils";

const Styles = createGlobalStyle`
  body {
    background-color: ${colors.gray10};
  }

  * {
    ${fonts.Lato};

    &:focus {
      outline: ${px2rem(2)} solid ${colors.gray40};
    }
  }

  h1 {
    ${typography.headingL}
  }

  h2 {
    ${typography.headingM}
  }

  h3 {
    ${typography.headingS}
  }

  h4 {
    ${typography.subHeading}
  }

  p {
    ${typography.bodyM}
  }

  small {
    ${typography.bodyXs}
  }
`;

export const GlobalStyles = () => (
  <>
    <Styles />
    <ResetCSS />
    <FontStyled />
  </>
);
