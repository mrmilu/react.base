import { spacing } from "@/src/shared/presentation/styles/spacing";
import { px2rem, wrapperStyles } from "@/src/shared/presentation/styles/utils.css";
import { style } from "@vanilla-extract/css";

const wrapper = style([
  wrapperStyles,
  {
    display: "flex",
    flexDirection: "column",
    padding: px2rem(spacing.size4),
    gap: px2rem(spacing.size6)
  }
]);

const wrapperChild = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

const classes = {
  wrapper,
  wrapperChild
};

export default classes;
