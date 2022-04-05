import type { MouseEventHandler, PropsWithChildren } from "react";
import { ButtonStyled } from "@/src/ui/components/button/button.styled";

export interface ButtonProps {
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  className?: string;
}

export const Button = ({ className, children, onClick, type, disabled }: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonStyled className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};
