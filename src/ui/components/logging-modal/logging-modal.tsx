import { forwardRef } from "react";
import css from "./logging-modal.css";

export const LoggingModal = forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <div className={css.wrapper} ref={ref}>
      <h4>Please log in to access Users Page</h4>
    </div>
  );
});
