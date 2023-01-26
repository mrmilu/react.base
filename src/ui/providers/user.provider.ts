/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, useStore } from "zustand";
import type { UserState } from "@/src/ui/view_models/user.slice";

export const userProvider = createStore<UserState>((set) => ({
  logged: false,
  setLogged(value: boolean) {
    set({
      logged: value
    });
  }
}));

export function useUserProvider(): UserState;
export function useUserProvider<T>(selector: (state: UserState) => T, equals?: (a: T, b: T) => boolean): T;
export function useUserProvider(selector?: any, equals?: any) {
  return useStore(userProvider, selector, equals);
}
