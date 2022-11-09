import styled from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { colors } from "../../styles/colors";
import { spacing } from "@/src/ui/styles/spacing";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${px2rem(spacing.size3)};
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: ${px2rem(40)};
  height: ${px2rem(26)};
  flex: 0 0 auto;

  > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${colors.gray80};
    }

    &:focus + span {
      box-shadow: 0 0 ${px2rem(1)} ${colors.gray80};
    }

    &:checked + span:before {
      transform: translateX(${px2rem(14)});
    }
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.gray40};
    transition: 0.4s;
    border-radius: ${px2rem(20)};

    &:before {
      position: absolute;
      content: "";
      height: ${px2rem(18)};
      width: ${px2rem(18)};
      left: ${px2rem(4)};
      bottom: ${px2rem(4)};
      background-color: ${colors.white};
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;

const SwitchStyled = {
  Wrapper,
  Switch
};

export default SwitchStyled;
