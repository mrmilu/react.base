import styled from "styled-components";
import { spacing } from "@/src/ui/styles/spacing";
import { px2rem, wrapperStyles } from "@/src/ui/styles/utils";
import { Button } from "@/src/ui/components/button/button";

const Wrapper = styled.div`
  ${wrapperStyles};
  display: flex;
  flex-direction: column;
  gap: ${px2rem(spacing.size6)};
  padding: ${px2rem(spacing.size4)};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ClearButton = styled(Button)`
  align-self: end;
  width: auto;
  background-color: darkred;
`;

const CreatePostPageStyled = {
  Wrapper,
  ClearButton
};

export default CreatePostPageStyled;
