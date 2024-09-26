import { locator } from "@/src/shared/ioc/__generated__";
import { TYPES } from "@/src/shared/ioc/__generated__/types";
import type { IocProvider } from "@/src/shared/ioc/interfaces";
import { uiProvider } from "@/src/shared/ui/providers/ui.provider";
import { createProvider } from "@/src/shared/ui/utils/zustand";
import type { GetUsersUseCase } from "@/src/users/application/use-cases/get-users-use-case";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";
import { makeCancelable, timeout } from "@front_web_mrmilu/utils";
import type { UsersListStateViewModel } from "../view-models/users-list-state";

export const useUsersListProvider = createProvider<UsersListStateViewModel>(() => (set) => ({
  users: [],

  async loadUsers() {
    const uiState = uiProvider.getState();
    try {
      uiState.setLoader(true);
      await timeout(1000);
      const getUsersUseCase = await locator.get<IocProvider<GetUsersUseCase>>(TYPES.GetUsersUseCase)();
      const users = await getUsersUseCase.execute();
      set({ users: users });
    } catch (e) {
      console.error(e);
    } finally {
      uiState.setLoader(false);
    }
  }
}));

export const useInitUsersListProvider = () => {
  const loadUsers = useUsersListProvider((state) => state.loadUsers);

  useEffectStrictMode(() => {
    const cancelablePromise = makeCancelable(loadUsers());
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
};
