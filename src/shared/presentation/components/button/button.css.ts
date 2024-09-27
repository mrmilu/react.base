import { px2rem } from "@/src/shared/presentation/styles/utils.css";
import { spacing } from "@/src/shared/presentation/styles/spacing";
import { vars } from "@/src/shared/presentation/styles/theme.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";

const button = recipe({
  base: {
    borderRadius: px2rem(16),
    border: "none",
    padding: `${px2rem(spacing.size2)} ${px2rem(spacing.size4)}`,
    color: vars.colors.white,
    cursor: "pointer"
  },
  variants: {
    type: {
      danger: {
        alignSelf: "end",
        width: "auto",
        backgroundColor: "darkred"
      }
    },
    disabled: {
      true: {
        backgroundColor: vars.colors.gray20,
        ":hover": { backgroundColor: vars.colors.gray20 },
        ":focus": { backgroundColor: vars.colors.gray20 }
      },
      false: {
        backgroundColor: vars.colors.gray90,
        ":hover": { backgroundColor: vars.colors.gray70 },
        ":focus": { backgroundColor: vars.colors.gray70 }
      }
    }
  },
  defaultVariants: {
    disabled: false
  }
});

const classes = {
  button
};

export type ButtonVariants = RecipeVariants<typeof button>;

export default classes;
