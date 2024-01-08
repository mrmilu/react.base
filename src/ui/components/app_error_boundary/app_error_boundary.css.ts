import { px2rem } from "@/src/ui/styles/utils.css";
import { vars } from "@/src/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1
});

const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
  height: "80%",
  backgroundColor: vars.colors.gray20,
  margin: "auto",
  boxShadow: vars.shadows.one,
  borderRadius: px2rem(6),
  color: vars.colors.gray80
});

const classes = {
  wrapper,
  content
};

export default classes;
