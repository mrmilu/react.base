import type { User } from "@/src/core/users/domain/models/user";
import { UserModal } from "@/src/ui/pages/dummy/components/user_modal/user_modal";
import { useBreakpointsMatch } from "@front_web_mrmilu/hooks";
import { SimpleCard } from "@/src/ui/components/simple_card/simple_card";
import BasePageStyled from "@/src/ui/pages/misc/components/base_page.styled";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { useUsersListProvider, useInitUsersListProvider } from "@/src/ui/pages/users/views/users_list_view/providers/users_list.provider";

export default function UsersListView() {
  useInitUsersListProvider();
  const users = useUsersListProvider((state) => state.users);
  const showModal = useUiProvider((state) => state.showModal);
  const { mdAndUp } = useBreakpointsMatch();

  const showUserModal = (user: User) => {
    showModal(<UserModal user={user} data-cy="user-modal" />);
  };

  return (
    <BasePageStyled.Wrapper data-cy="users-list-view">
      {mdAndUp && <h2>Dummy page</h2>}
      {users.map((user, idx) => (
        <SimpleCard data-cy="dummy-card" onClick={() => showUserModal(user)} key={`${user.id}_${idx}`} title={user.name} subtitle={user.email} />
      ))}
    </BasePageStyled.Wrapper>
  );
}
