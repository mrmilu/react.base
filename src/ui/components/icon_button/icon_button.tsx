import type { MouseEventHandler, ReactNode } from "react";
import { forwardRef } from "react";
import css from "./icon_button.css";

export interface IconButtonProps {
  onClick?: MouseEventHandler;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  asLink?: boolean;
}

export const IconButton = forwardRef<HTMLAnchorElement, IconButtonProps>(
  ({ href, onClick, icon, disabled = false, className, asLink = false }, ref) => {
    if (asLink) {
      return (
        <a href={href} ref={ref}>
          <button className={`${css.wrapper} ${className ?? ""}`}>{icon}</button>
        </a>
      );
    }
    return (
      <button disabled={disabled} className={`${css.wrapper} ${className ?? ""}`} onClick={onClick}>
        {icon}
      </button>
    );
  }
);
