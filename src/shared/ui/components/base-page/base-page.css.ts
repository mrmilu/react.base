import { spacing } from "@/src/shared/ui/styles/spacing";
import { px2rem, wrapperStyles } from "@/src/shared/ui/styles/utils.css";
import { style } from "@vanilla-extract/css";

const wrapper = style([
  wrapperStyles,
  {
    display: "flex",

    flexDirection: "column",
    gap: px2rem(spacing.size6),
    padding: px2rem(spacing.size4)
  }
]);

const classes = {
  wrapper
};

export default classes;
