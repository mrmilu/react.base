import Styled from "@/src/ui/features/users/components/user_modal/user_modal.styled";
import type { User } from "@/src/core/users/domain/models/user";
import { forwardRef } from "react";
import type { CypressProps } from "@/src/ui/view_models/cypress";

interface UserModalProps extends CypressProps {
  user: User;
}

export const UserModal = forwardRef<HTMLDivElement, UserModalProps>(({ user, "data-cy": dataCy }, ref) => {
  return (
    <Styled.Wrapper data-cy={dataCy} id={user.id} ref={ref}>
      <Styled.Content>
        <h3>
          <b>Name:</b> {user.name}
        </h3>
        <p>
          <b>Email</b>: {user.email}
        </p>
        <small>ID: {user.id}</small>
      </Styled.Content>
    </Styled.Wrapper>
  );
});
