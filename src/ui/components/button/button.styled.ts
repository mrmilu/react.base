import styled from "styled-components";
import { colors } from "../../styles/colors";
import type { ButtonProps } from "@/src/ui/components/button/button";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";

const Wrapper = styled.button<ButtonProps>`
  border-radius: ${px2rem(16)};
  background-color: ${(props) => (props.disabled ? colors.gray20 : colors.gray90)};
  border: none;
  padding: ${px2rem(spacing.size2)} ${px2rem(spacing.size4)};
  color: ${colors.white};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) => (props.disabled ? colors.gray20 : colors.gray70)};
  }
`;

const ButtonStyled = {
  Wrapper
};

export default ButtonStyled;
