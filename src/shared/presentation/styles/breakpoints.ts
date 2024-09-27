export const breakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 768,
  lg: 1024
};

export type BreakpointTypes = "sm" | "md" | "lg";
export const getBreakpoint = (type: BreakpointTypes) => `(min-width: ${breakpoints[type]}px)`;
