import type { MouseEventHandler, PropsWithChildren } from "react";
import type { ButtonVariants } from "./button.css";
import css from "./button.css";
import type { CypressProps } from "@/src/ui/view_models/cypress";

export interface ButtonProps extends CypressProps {
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  variants?: Omit<ButtonVariants, "disabled">;
}

export const Button = ({ children, onClick, type, disabled, variants, ...rest }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={css.button({ disabled, ...variants })} type={type} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
