import { px2rem, wrapperStyles } from "@/src/shared/presentation/styles/utils.css";
import { spacing } from "@/src/shared/presentation/styles/spacing";
import { style } from "@vanilla-extract/css";
import { vars } from "@/src/shared/presentation/styles/theme.css";

const wrapper = style([
  wrapperStyles,
  {
    display: "flex",
    flexDirection: "column",
    backgroundColor: vars.colors.white,
    padding: px2rem(spacing.size4),
    borderRadius: px2rem(4),
    gap: px2rem(spacing.size2)
  }
]);

const form = style({
  display: "flex",
  flexDirection: "column",
  gap: px2rem(spacing.size4)
});

const locale = style({
  display: "flex",
  alignItems: "center",
  margin: `${px2rem(spacing.size4)} 0`,
  gap: px2rem(spacing.size4)
});

const classes = {
  wrapper,
  form,
  locale
};

export default classes;
