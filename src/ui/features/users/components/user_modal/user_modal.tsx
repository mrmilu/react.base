import Styled from "./user_modal.styled";
import { forwardRef } from "react";
import type { User } from "@/src/core/users/domain/models/user";

interface UserModalProps {
  user: User;
}

export const UserModal = forwardRef<HTMLDivElement, UserModalProps>(({ user }, ref) => {
  return (
    <Styled.Content id={user.id} ref={ref}>
      <h3>
        <b>Name:</b> {user.name}
      </h3>
      <p>
        <b>Email</b>: {user.email}
      </p>
      <small>ID: {user.id}</small>
    </Styled.Content>
  );
});
