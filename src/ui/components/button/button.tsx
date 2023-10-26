import type { MouseEventHandler, PropsWithChildren } from "react";
import type { ButtonVariants } from "./button.css";
import css from "./button.css";

export interface ButtonProps {
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  variants?: Omit<ButtonVariants, "disabled">;
}

export const Button = ({ children, onClick, type, disabled, variants }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={css.button({ disabled, ...variants })} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
