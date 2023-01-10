import Styled from "@/src/ui/components/simple_card/simple_card.styled";
import type { MouseEventHandler } from "react";
import type { CypressProps } from "@/src/ui/view_models/cypress";

export interface SimpleCardProps extends CypressProps {
  title: string;
  subtitle: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export const SimpleCard = ({ title, subtitle, className, onClick, "data-cy": dataCy }: SimpleCardProps) => {
  return (
    <Styled.Wrapper onClick={onClick} className={className} data-cy={dataCy}>
      <Styled.Avatar />
      <Styled.Content>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
