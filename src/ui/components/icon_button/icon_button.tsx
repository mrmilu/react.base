import type { MouseEventHandler, ReactNode } from "react";
import React, { forwardRef } from "react";
import { IconButtonStyled } from "./icon_button.styled";

export interface IconButtonProps {
  onClick?: MouseEventHandler;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  asLink?: boolean;
}

// eslint-disable-next-line react/display-name
export const IconButton = forwardRef<HTMLAnchorElement, IconButtonProps>(
  ({ href, onClick, icon, disabled = false, className, asLink = false }, ref) => {
    if (asLink) {
      return (
        <IconButtonStyled as="a" className={className} href={href} onClick={onClick} ref={ref}>
          {icon}
        </IconButtonStyled>
      );
    }
    return (
      <IconButtonStyled disabled={disabled} className={className} onClick={onClick}>
        {icon}
      </IconButtonStyled>
    );
  }
);
