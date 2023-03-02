/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UiState } from "../view_models/ui_state";
import type { ReactNode } from "react";
import { createStore, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";

export const uiProvider = createStore<UiState>()(
  immer((set) => ({
    showLoader: false,
    modal: {
      show: false,
      content: null
    },
    showModal(modalContent: ReactNode) {
      set((state) => {
        state.modal.content = modalContent;
      });

      setTimeout(() => {
        set((state) => {
          state.modal.show = true;
        });
      }, 150);
    },
    setLoader(value: boolean) {
      set((state) => {
        state.showLoader = value;
      });
    },
    hideModal() {
      set((state) => {
        state.modal.show = false;
      });

      setTimeout(() => {
        set((state) => {
          state.modal.content = null;
        });
      }, 150);
    }
  }))
);

export function useUiProvider(): UiState;
export function useUiProvider<T>(selector: (state: UiState) => T, equals?: (a: T, b: T) => boolean): T;
export function useUiProvider(selector?: any, equals?: any) {
  return useStore(uiProvider, selector, equals);
}
