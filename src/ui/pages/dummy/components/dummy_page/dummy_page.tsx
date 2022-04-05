import { useAppDispatch, useAppSelector } from "@/src/ui/state";
import { getLoadingState, getUsers, getUsersThunk } from "@/src/ui/pages/dummy/state/dummy.slice";
import { DummyPageSimpleCardStyled, DummyPageStyled } from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import { LoaderStyled } from "@/src/ui/components/loader/loader.styled";
import { useBreakpointsMatch } from "@/src/ui/hooks/breakpoint_match.hook";
import type { DummyUser } from "@/src/core/dummy/domain/models/dummy_user";
import { UserModal } from "@/src/ui/pages/dummy/components/user_modal/user_modal";
import { showModal } from "@/src/ui/state/ui.slice";
import { makeCancelable } from "@/src/common/utils/promise";
import { useEffectOnce } from "@/src/ui/hooks/use_effect_once";

export default function DummyPage() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const loadingUsers = useAppSelector(getLoadingState);
  const { mdAndUp } = useBreakpointsMatch();

  useEffectOnce(() => {
    const cancelablePromise = makeCancelable(dispatch(getUsersThunk()));
    cancelablePromise.promise.then(() => {
      console.log("Expensive side effect");
    });
    cancelablePromise.onCancel(() => {
      console.log("Promise canceled");
    });

    return () => {
      cancelablePromise.cancel();
    };
  });

  const showUserModal = (user: DummyUser) => {
    dispatch(showModal(<UserModal user={user} />));
  };

  return (
    <DummyPageStyled>
      {mdAndUp && <h2>Dummy page</h2>}
      {loadingUsers ? (
        <LoaderStyled />
      ) : (
        users.map((user, idx) => (
          <DummyPageSimpleCardStyled onClick={() => showUserModal(user)} key={`${user.id}_${idx}`} title={user.name} subtitle={user.email} />
        ))
      )}
    </DummyPageStyled>
  );
}
