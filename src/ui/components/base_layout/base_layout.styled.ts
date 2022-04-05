import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "../../styles/spacing";
import { includeMedia } from "@/src/ui/styles/breakpoints";

export const BaseLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 ${px2rem(spacing.size4)};
  }
`;

export const BaseLayoutFooterStyled = styled.footer`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray90};
  color: ${colors.white};
  height: ${px2rem(120)};
`;

export const BaseLayoutNavStyled = styled.nav`
  height: ${px2rem(60)};
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: start;
  background-color: ${colors.gray20};
  padding: 0 ${px2rem(spacing.size4)};

  ${includeMedia(
    "md",
    css`
      justify-content: center;
    `
  )};

  ${includeMedia(
    "lg",
    css`
      justify-content: end;
    `
  )};

  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: ${px2rem(8)};
      list-style: none;
    }
  }
`;
