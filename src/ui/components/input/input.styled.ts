import styled, { css } from "styled-components";
import { typography } from "@/src/ui/styles/typography";
import { spacing } from "@/src/ui/styles/spacing";
import { px2rem } from "@/src/ui/styles/utils";
import { colors } from "../../styles/colors";
import { includeMedia } from "@/src/ui/styles/breakpoints";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.label`
  ${typography.bodyM};
  display: flex;
  flex-direction: column;
  position: relative;

  > span {
    margin-bottom: ${px2rem(spacing.size1)};
  }

  & > input {
    padding: ${px2rem(spacing.size1)};
    border: ${px2rem(1)} solid ${colors.gray60};
    border-radius: ${px2rem(4)};

    &:focus {
      outline: none;
      border-radius: ${px2rem(4)};
      box-shadow: 0 0 0 ${px2rem(2)} ${colors.gray30};
      transition: 0.1s;
    }

    ${includeMedia(
      "md",
      css`
        padding: ${px2rem(spacing.size2)};
      `
    )}
  }
`;

const Error = styled.div`
  color: ${colors.gray60};
`;

const InputStyled = {
  Wrapper,
  Input,
  Error
};

export default InputStyled;
