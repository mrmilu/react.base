import type { User } from "@/src/core/users/domain/models/user";
import BasePage from "@/src/ui/components/base-page/base-page";
import { SimpleCard } from "@/src/ui/components/simple-card/simple-card";
import { useInitUsersListProvider, useUsersListProvider } from "@/src/ui/features/users/views/users-list-page/providers/users-list.provider";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { useBreakpointsMatch } from "@front_web_mrmilu/hooks";
import { UserModal } from "../../components/user-modal/user-modal";

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
