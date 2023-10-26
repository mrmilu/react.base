import { colors } from "@/src/ui/styles/colors";
import { spacing } from "@/src/ui/styles/spacing";
import { px2rem } from "@/src/ui/styles/utils.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: ${px2rem(spacing.size6)};
`;

const LoggingModalStyled = {
  Wrapper
};

export default LoggingModalStyled;
