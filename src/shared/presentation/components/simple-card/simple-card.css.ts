import { px2rem } from "@/src/shared/presentation/styles/utils.css";
import { spacing } from "@/src/shared/presentation/styles/spacing";
import { style } from "@vanilla-extract/css";
import { vars } from "@/src/shared/presentation/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

const wrapper = recipe({
  base: {
    display: "flex",
    minWidth: "0",
    alignItems: "center",
    padding: px2rem(spacing.size4),
    backgroundColor: vars.colors.white,
    boxShadow: vars.shadows.one,
    borderRadius: px2rem(8)
  },
  variants: {
    onClick: {
      true: { cursor: "pointer" }
    }
  },
  defaultVariants: { onClick: false }
});

const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: px2rem(spacing.size1),
  marginLeft: px2rem(spacing.size4)
});

const p = style({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

const avatar = style({
  width: px2rem(65),
  height: px2rem(65),
  borderRadius: "100%",
  flex: "0 0 auto",
  backgroundColor: vars.colors.gray30
});

const classes = {
  wrapper,
  content,
  avatar,
  p
};

export default classes;
