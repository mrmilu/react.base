import { colors } from "@/src/ui/styles/colors";
import * as Radix from "@radix-ui/react-checkbox";
import styled from "styled-components";

const Wrapper = styled.div``;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
`;

const Root = styled(Radix.Root)`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  padding: 0;
  display: grid;
  place-content: center;
  box-shadow: 0 2px 10px ${colors.gray50};
  margin-right: 10px;
  :hover {
    background-color: ${colors.gray10};
  }
  :focus {
    box-shadow: 0 0 0 2px ${colors.gray90};
  }
`;

const Indicator = styled(Radix.Indicator)`
  height: 25px;
  width: 25px;
  display: grid;
  place-items: center;
`;

const Error = styled.p`
  color: ${colors.gray60};
`;

export default {
  Wrapper,
  Root,
  Indicator,
  CheckboxWrapper,
  Error
};
