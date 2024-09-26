import type { CypressProps } from "@/src/shared/ui/view-models/cypress";
import type { PropsWithChildren } from "react";
import css from "./base-page.css";

export default function BasePage({ children, ...rest }: PropsWithChildren<CypressProps>) {
  return (
    <div className={css.wrapper} {...rest}>
      {children}
    </div>
  );
}
