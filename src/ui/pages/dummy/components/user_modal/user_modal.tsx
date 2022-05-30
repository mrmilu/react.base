import { UserModalContentStyled, UserModalStyled } from "@/src/ui/pages/dummy/components/user_modal/user_modal.styled";
import type { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";
import { forwardRef } from "react";
import type { CypressProps } from "@/src/ui/view_models/cypress";

interface UserModalProps extends CypressProps {
  user: DummyUser;
}

// eslint-disable-next-line react/display-name
export const UserModal = forwardRef<HTMLDivElement, UserModalProps>(({ user, "data-cy": dataCy }, ref) => {
  return (
    <UserModalContentStyled data-cy={dataCy} id={user.id} ref={ref}>
      <UserModalStyled>
        <h3>
          <b>Name:</b> {user.name}
        </h3>
        <p>
          <b>Email</b>: {user.email}
        </p>
        <small>ID: {user.id}</small>
      </UserModalStyled>
    </UserModalContentStyled>
  );
});
