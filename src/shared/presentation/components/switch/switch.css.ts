import { px2rem } from "@/src/shared/presentation/styles/utils.css";
import { spacing } from "@/src/shared/presentation/styles/spacing";
import { style } from "@vanilla-extract/css";
import { vars } from "@/src/shared/presentation/styles/theme.css";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  gap: px2rem(spacing.size3)
});

const label = style({
  position: "relative",
  display: "inline-block",
  width: px2rem(40),
  height: px2rem(26),
  flex: "0 0 auto"
});

const input = style({
  opacity: "0",
  width: "0",
  height: "0"
});

const span = style({
  position: "absolute",
  cursor: "pointer",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: vars.colors.gray40,
  transition: "0.4s",
  borderRadius: px2rem(20),

  ":before": {
    position: "absolute",
    content: "",
    height: px2rem(18),
    width: px2rem(18),
    left: px2rem(4),
    bottom: px2rem(4),
    backgroundColor: vars.colors.white,
    transition: "0.4s",
    borderRadius: "50%"
  },

  selectors: {
    [`${input}:checked + &`]: {
      backgroundColor: vars.colors.gray80
    },
    [`${input}:focus + &`]: {
      boxShadow: `0 0 ${px2rem(1)} ${vars.colors.gray80}`
    },
    [`${input}:checked + &:before`]: {
      transform: `translateX(${px2rem(14)})`
    }
  }
});

const classes = {
  wrapper,
  label,
  input,
  span
};

export default classes;
