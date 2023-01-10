import type { MouseEventHandler, PropsWithChildren } from "react";
import Styled from "@/src/ui/components/button/button.styled";

export interface ButtonProps {
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  className?: string;
}

export const Button = ({ className, children, onClick, type, disabled }: PropsWithChildren<ButtonProps>) => {
  return (
    <Styled.Wrapper className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Styled.Wrapper>
  );
};
