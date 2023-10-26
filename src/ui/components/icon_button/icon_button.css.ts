import { px2rem } from "@/src/ui/styles/utils.css";
import { spacing } from "../../styles/spacing";
import { style } from "@vanilla-extract/css";
import { vars } from "@/src/ui/styles/theme.css";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "rgba(255, 255, 255, 0)",
  padding: px2rem(spacing.size2),
  border: "none",
  borderRadius: "50%",

  ":hover": {
    backgroundColor: vars.colors.gray10
  }
});

const svg = style({
  height: px2rem(22),
  width: px2rem(22)
});

const classes = {
  svg,
  wrapper
};

export default classes;
