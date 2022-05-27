import { SimpleCardStyled, SimpleCardAvatarStyled, SimpleCardStyledContent } from "@/src/ui/components/simple_card/simple_card.styled";
import type { MouseEventHandler } from "react";
import type { CypressProps } from "@/src/ui/view_models/cypress";

export interface SimpleCardProps extends CypressProps {
  title: string;
  subtitle: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export const SimpleCard = ({ title, subtitle, className, onClick, ...rest }: SimpleCardProps) => {
  return (
    <SimpleCardStyled onClick={onClick} className={className} {...rest}>
      <SimpleCardAvatarStyled />
      <SimpleCardStyledContent>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </SimpleCardStyledContent>
    </SimpleCardStyled>
  );
};
