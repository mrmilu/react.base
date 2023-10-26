import { spacing } from "@/src/ui/styles/spacing";
import { px2rem } from "@/src/ui/styles/utils.css";
import { style } from "@vanilla-extract/css";
import { vars } from "@/src/ui/styles/theme.css";
import { typographyStyles } from "@/src/ui/styles/typography.css";
import { getBreakpoint } from "@/src/ui/styles/breakpoints";

const wrapper = style({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});

const label = style({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});

const input = style([
  typographyStyles.bodyM,
  {
    padding: px2rem(spacing.size1),
    border: `${px2rem(1)} solid ${vars.colors.gray60}`,
    borderRadius: px2rem(4),

    ":focus": {
      outline: "none",
      borderRadius: px2rem(4),
      boxShadow: `0 0 0 ${px2rem(2)} ${vars.colors.gray30}`,
      transition: "0.1s"
    },

    "@media": {
      [getBreakpoint("md")]: {
        padding: px2rem(spacing.size2)
      }
    }
  }
]);

const span = style({
  marginBottom: px2rem(spacing.size1)
});

const error = style({
  color: vars.colors.gray60
});

const classes = {
  wrapper,
  label,
  span,
  input,
  error
};

export default classes;
