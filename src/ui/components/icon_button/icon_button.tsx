import type { MouseEventHandler, ReactNode } from "react";
import React, { forwardRef } from "react";
import { IconButtonStyled } from "./icon_button.styled";
import type { CypressProps } from "@/src/ui/view_models/cypress";

export interface IconButtonProps extends CypressProps {
  onClick?: MouseEventHandler;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  asLink?: boolean;
}

// eslint-disable-next-line react/display-name
export const IconButton = forwardRef<HTMLAnchorElement, IconButtonProps>(
  ({ href, onClick, icon, disabled = false, className, asLink = false, "data-cy": dataCy }, ref) => {
    if (asLink) {
      return (
        <IconButtonStyled data-cy={dataCy} as="a" className={className} href={href} onClick={onClick} ref={ref}>
          {icon}
        </IconButtonStyled>
      );
    }
    return (
      <IconButtonStyled data-cy={dataCy} disabled={disabled} className={className} onClick={onClick}>
        {icon}
      </IconButtonStyled>
    );
  }
);
