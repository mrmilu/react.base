import styled from "styled-components";
import { colors } from "../../styles/colors";
import { px2rem } from "@/src/ui/styles/utils";
import { shadows } from "@/src/ui/styles/shadows";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80%;
    background-color: ${colors.gray20};
    margin: auto;
    box-shadow: ${shadows.one};
    border-radius: ${px2rem(6)};
    color: ${colors.gray80};
  }
`;

const AppErrorBoundaryStyled = {
  Wrapper
};

export default AppErrorBoundaryStyled;
