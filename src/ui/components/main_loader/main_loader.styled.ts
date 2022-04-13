import styled from "styled-components";
import { animated } from "react-spring";

export const MainLoaderStyled = styled(animated.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255 255 255 / 70%);
  width: 100vw;
  height: 100vh;
  z-index: 9;
  top: 0;
  left: 0;
`;
