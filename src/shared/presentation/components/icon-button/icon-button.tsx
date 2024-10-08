import type { CypressProps } from "@/src/shared/presentation/view-models/cypress";
import type { MouseEventHandler, ReactNode } from "react";
import { forwardRef } from "react";
import css from "./icon-button.css";

export interface IconButtonProps extends CypressProps {
  onClick?: MouseEventHandler;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  asLink?: boolean;
}

export const IconButton = forwardRef<HTMLAnchorElement, IconButtonProps>(
  ({ href, onClick, icon, disabled = false, className, asLink = false, ...rest }, ref) => {
    if (asLink) {
      return (
        <a href={href} ref={ref} {...rest}>
          <button className={`${css.wrapper} ${className ?? ""}`}>{icon}</button>
        </a>
      );
    }
    return (
      <button disabled={disabled} className={`${css.wrapper} ${className ?? ""}`} onClick={onClick} {...rest}>
        {icon}
      </button>
    );
  }
);
