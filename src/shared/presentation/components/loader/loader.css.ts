import { px2rem } from "@/src/shared/presentation/styles/utils.css";
import { vars } from "@/src/shared/presentation/styles/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const dotFlashing = keyframes({
  "0%": {
    backgroundColor: vars.colors.gray70
  },
  "50%, 100%": {
    backgroundColor: vars.colors.gray40
  }
});

const loader = style({
  position: "relative",
  width: px2rem(10),
  height: px2rem(10),
  borderRadius: px2rem(5),
  backgroundColor: vars.colors.gray70,
  color: vars.colors.gray70,
  animation: `${dotFlashing} 1s infinite alternate`,
  animationDelay: "0.5s",

  "::before": {
    content: "",
    display: "inline-block",
    position: "absolute",
    top: "0",
    right: px2rem(15),
    width: px2rem(10),
    height: px2rem(10),
    borderRadius: px2rem(5),
    backgroundColor: vars.colors.gray70,
    color: vars.colors.gray70,
    animation: `${dotFlashing} 1s infinite alternate`,
    animationDelay: "0s"
  },

  "::after": {
    content: "",
    display: "inline-block",
    position: "absolute",
    top: "0",
    left: px2rem(15),
    width: px2rem(10),
    height: px2rem(10),
    borderRadius: px2rem(5),
    backgroundColor: vars.colors.gray70,
    color: vars.colors.gray70,
    animation: `${dotFlashing} 1s infinite alternate`,
    animationDelay: "1s"
  }
});

const classes = {
  loader
};

export default classes;
