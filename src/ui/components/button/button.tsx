import type { MouseEventHandler, PropsWithChildren } from "react";
import { ButtonStyled } from "@/src/ui/components/button/button.styled";
import type { CypressProps } from "@/src/ui/view_models/cypress";

export interface ButtonProps extends CypressProps {
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  className?: string;
}

export const Button = ({ className, children, onClick, type, disabled, "data-cy": dataCy }: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonStyled className={className} type={type} onClick={onClick} disabled={disabled} data-cy={dataCy}>
      {children}
    </ButtonStyled>
  );
};
