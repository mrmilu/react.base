import type { MouseEventHandler } from "react";
import { typographyStyles } from "@/src/ui/styles/typography.css";
import css from "./simple_card.css";
import type { CypressProps } from "@/src/ui/view_models/cypress";

export interface SimpleCardProps extends CypressProps {
  title: string;
  subtitle: string;
  onClick?: MouseEventHandler;
}

export const SimpleCard = ({ title, subtitle, onClick, ...rest }: SimpleCardProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={onClick} className={css.wrapper({ onClick: Boolean(onClick) })} {...rest}>
      <div className={css.avatar} />
      <div className={css.content}>
        <h4 className={typographyStyles.bodyL}>{title}</h4>
        <p className={css.p}>{subtitle}</p>
      </div>
    </div>
  );
};
