import { px2rem } from "@/src/ui/styles/utils.css";
import { spacing } from "../../styles/spacing";
import { style } from "@vanilla-extract/css";
import { vars } from "@/src/ui/styles/theme.css";
import { getBreakpoint } from "@/src/ui/styles/breakpoints";

const wrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh"
});

const main = style({
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  padding: `0 ${px2rem(spacing.size4)}`
});

const footer = style({
  display: "flex",
  flex: "0 0 auto",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.colors.gray90,
  color: vars.colors.white,
  height: px2rem(120)
});

const nav = style({
  height: px2rem(60),
  display: "flex",
  flex: "0 0 auto",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: vars.colors.gray20,
  padding: `0 ${px2rem(spacing.size4)}`,
  gap: px2rem(spacing.size4),
  "@media": {
    [getBreakpoint("md")]: {
      justifyContent: "center"
    },
    [getBreakpoint("lg")]: {
      justifyContent: "end"
    }
  }
});

const ul = style({
  display: "flex",
  alignItems: "center"
});

const li = style({
  marginLeft: px2rem(8),
  listStyle: "none"
});

const classes = {
  wrapper,
  main,
  footer,
  nav,
  ul,
  li
};

export default classes;
