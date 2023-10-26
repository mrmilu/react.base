import type { MouseEventHandler } from "react";
import { typographyStyles } from "@/src/ui/styles/typography.css";
import css from "./simple_card.css";

export interface SimpleCardProps {
  title: string;
  subtitle: string;
  onClick?: MouseEventHandler;
}

export const SimpleCard = ({ title, subtitle, onClick }: SimpleCardProps) => {
  return (
    <div onClick={onClick} className={css.wrapper({ onClick: Boolean(onClick) })}>
      <div className={css.avatar} />
      <div className={css.content}>
        <h4 className={typographyStyles.bodyL}>{title}</h4>
        <p className={css.p}>{subtitle}</p>
      </div>
    </div>
  );
};
