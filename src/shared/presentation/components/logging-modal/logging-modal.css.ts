import { spacing } from "../../styles/spacing";
import { px2rem } from "../../styles/utils.css";
import { vars } from "@/src/shared/presentation/styles/theme.css";
import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.colors.white,
  padding: px2rem(spacing.size6)
});

const classes = {
  wrapper
};

export default classes;
