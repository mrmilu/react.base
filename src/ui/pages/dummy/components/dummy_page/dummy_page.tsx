import { useAppDispatch, useAppSelector } from "@/src/ui/state";
import { getUsers, getUsersThunk } from "@/src/ui/pages/dummy/state/dummy.slice";
import { DummyPageSimpleCardStyled, DummyPageStyled } from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import type { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";
import { UserModal } from "@/src/ui/pages/dummy/components/user_modal/user_modal";
import { showModal } from "@/src/ui/state/ui.slice";
import { makeCancelable } from "@front_web_mrmilu/utils";
import { useBreakpointsMatch, useEffectStrictMode } from "@front_web_mrmilu/hooks";

export default function DummyPage() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const { mdAndUp } = useBreakpointsMatch();

  useEffectStrictMode(() => {
    const cancelablePromise = makeCancelable(dispatch(getUsersThunk()));
    cancelablePromise.promise.then(() => {
      console.log("Expensive side effect");
    });
    cancelablePromise.onCancel(() => {
      console.log("Promise canceled");
    });

    return () => {
      cancelablePromise.cancel(); // clean up only works if strict mode enabled
    };
  });

  const showUserModal = (user: DummyUser) => {
    dispatch(showModal(<UserModal user={user} />));
  };

  return (
    <DummyPageStyled data-cy="dummy-page">
      {mdAndUp && <h2>Dummy page</h2>}
      {users.map((user, idx) => (
        <DummyPageSimpleCardStyled
          data-cy="dummy-card"
          onClick={() => showUserModal(user)}
          key={`${user.id}_${idx}`}
          title={user.name}
          subtitle={user.email}
        />
      ))}
    </DummyPageStyled>
  );
}
