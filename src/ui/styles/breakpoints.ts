import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

export const breakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 768,
  lg: 1024
};

export type BreakpointTypes = "sm" | "md" | "lg";
export const includeMedia = (type: BreakpointTypes, styles: FlattenSimpleInterpolation) => css`
  @media (min-width: ${breakpoints[type]}px) {
    ${styles}
  }
`;
