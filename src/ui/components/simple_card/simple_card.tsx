import { SimpleCardStyled, SimpleCardAvatarStyled, SimpleCardStyledContent } from "@/src/ui/components/simple_card/simple_card.styled";
import type { MouseEventHandler } from "react";

export interface SimpleCardProps {
  title: string;
  subtitle: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export const SimpleCard = ({ title, subtitle, className, onClick }: SimpleCardProps) => {
  return (
    <SimpleCardStyled onClick={onClick} className={className}>
      <SimpleCardAvatarStyled />
      <SimpleCardStyledContent>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </SimpleCardStyledContent>
    </SimpleCardStyled>
  );
};
