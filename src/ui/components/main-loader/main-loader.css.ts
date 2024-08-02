import { style } from "@vanilla-extract/css";

const wrapper = style({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(255 255 255 / 70%)",
  width: "100vw",
  height: "100vh",
  zIndex: "9",
  top: "0",
  left: "0"
});

const classes = {
  wrapper
};

export default classes;
