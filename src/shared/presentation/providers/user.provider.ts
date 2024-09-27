/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UserStateViewModel } from "@/src/shared/presentation/view-models/user-state";
import { createStore, useStore } from "zustand";

export const userProvider = createStore<UserStateViewModel>((set) => ({
  logged: false,
  setLogged(value: boolean) {
    set({
      logged: value
    });
  }
}));

export function useUserProvider(): UserStateViewModel;
export function useUserProvider<T>(selector: (state: UserStateViewModel) => T, equals?: (a: T, b: T) => boolean): T;
export function useUserProvider(selector?: any, equals?: any) {
  return useStore(userProvider, selector, equals);
}
