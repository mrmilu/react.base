import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import { makeCancelable, timeout } from "@front_web_mrmilu/utils";
import { createProvider } from "@/src/common/utils/zustand";
import type { GetUsersUseCase } from "@/src/core/users/domain/use_cases/get_users_use_case";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";
import { uiProvider } from "@/src/ui/providers/ui.provider";
import type { UsersListState } from "@/src/ui/pages/users/views/users_list_view/view_models/dummy_state";

export const useUsersListProvider = createProvider<UsersListState>((set) => ({
  users: [],

  async loadUsers() {
    const uiState = uiProvider.getState();
    try {
      uiState.setLoader(true);
      await timeout(1000);
      const getDummyUsersUseCase = await locator.get<IocProvider<GetUsersUseCase>>(TYPES.GetUsersUseCase)();
      const users = await getDummyUsersUseCase.execute();
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
