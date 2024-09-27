import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/src/shared/presentation/styles/theme.css";

const content = recipe({
  base: {
    display: "flex",
    flexDirection: "column"
  },
  variants: {
    oddEven: {
      even: { backgroundColor: vars.colors.gray40 },
      odd: { backgroundColor: vars.colors.gray10 }
    }
  },
  defaultVariants: {
    oddEven: "even"
  }
});

const classes = {
  content
};

export default classes;
