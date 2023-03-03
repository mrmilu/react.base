import Styled from "@/src/ui/features/misc/components/logging_modal/logging_modal.styled";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const LoggingModal = forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <Styled.Wrapper ref={ref}>
      <h4>Please log in to access User Page</h4>
    </Styled.Wrapper>
  );
});
