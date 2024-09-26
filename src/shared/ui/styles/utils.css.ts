import { breakpoints } from "./breakpoints";
import { spacing } from "./spacing";
import { style } from "@vanilla-extract/css";

export const px2rem = (target: string | number): string => {
  typeof target === "string" && (target = target.replace("px", ""));
  const fontSizeBase = 16;
  const remSize = Number(target) / fontSizeBase;
  return `${remSize}rem`;
};

export const wrapperStyles = style({
  margin: `${px2rem(spacing.size4)} auto`,
  width: "100%",
  height: "100%",
  maxWidth: px2rem(breakpoints.lg)
});
