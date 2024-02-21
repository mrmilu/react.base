import type { PropsWithChildren } from "react";
import css from "./base_page.css";
import type { CypressProps } from "@/src/ui/view_models/cypress";

export default function BasePage({ children, ...rest }: PropsWithChildren<CypressProps>) {
  return (
    <div className={css.wrapper} {...rest}>
      {children}
    </div>
  );
}
