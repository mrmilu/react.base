import type { PropsWithChildren } from "react";
import css from "./base_page.css";

export default function BasePage({ children }: PropsWithChildren) {
  return <div className={css.wrapper}>{children}</div>;
}
