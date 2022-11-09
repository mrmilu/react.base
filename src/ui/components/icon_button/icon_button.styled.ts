import styled from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "../../styles/spacing";
import { colors } from "../../styles/colors";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  padding: ${px2rem(spacing.size2)};
  border: none;
  border-radius: 50%;

  & > svg {
    height: ${px2rem(22)};
    width: ${px2rem(22)};
  }

  &:hover {
    background-color: ${colors.gray10};
  }
`;

const IconButtonStyled = {
  Wrapper
};

export default IconButtonStyled;
