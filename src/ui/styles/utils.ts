import { css } from "styled-components";
import { breakpoints } from "./breakpoints";
import { spacing } from "./spacing";

export const px2rem = (target: string | number): string => {
  typeof target === "string" && (target = target.replace("px", ""));
  const fontSizeBase = 16;
  const remSize = Number(target) / fontSizeBase;
  return `${remSize}rem`;
};

export const wrapperStyles = css`
  margin: ${px2rem(spacing.size4)} auto;
  width: 100%;
  height: 100%;
  max-width: ${px2rem(breakpoints.lg)};
`;
