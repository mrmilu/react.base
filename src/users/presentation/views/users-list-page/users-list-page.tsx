import BasePage from "@/src/shared/presentation/components/base-page/base-page";
import { SimpleCard } from "@/src/shared/presentation/components/simple-card/simple-card";
import { useUiProvider } from "@/src/shared/presentation/providers/ui.provider";
import type { User } from "@/src/users/domain/models/user";
import { useBreakpointsMatch } from "@front_web_mrmilu/hooks";
import { UserModal } from "../../components/user-modal/user-modal";
import { useInitUsersListProvider, useUsersListProvider } from "./providers/users-list.provider";

export default function UsersListPage() {
  useInitUsersListProvider();
  const users = useUsersListProvider((state) => state.users);
  const showModal = useUiProvider((state) => state.showModal);
  const { mdAndUp } = useBreakpointsMatch();

  const showUserModal = (user: User) => {
    showModal(<UserModal user={user} data-cy="user-modal" />);
  };

  return (
    <BasePage data-cy="users-page">
      {mdAndUp && <h2>Users page</h2>}
      {users.map((user, idx) => (
        <SimpleCard data-cy="user-card" onClick={() => showUserModal(user)} key={`${user.id}_${idx}`} title={user.name} subtitle={user.email} />
      ))}
    </BasePage>
  );
}
