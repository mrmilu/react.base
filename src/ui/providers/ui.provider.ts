/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UiState } from "../view_models/ui_state";
import type { ReactNode } from "react";
import { createStore, useStore } from "zustand";
import produce from "immer";

export const uiProvider = createStore<UiState>((set) => ({
  showLoader: false,
  modal: {
    show: false,
    content: null
  },
  showModal(modalContent: ReactNode) {
    set(
      produce((state) => {
        state.modal.content = modalContent;
      })
    );

    setTimeout(() => {
      set(
        produce((state) => {
          state.modal.show = true;
        })
      );
    }, 150);
  },
  setLoader(value: boolean) {
    set(
      produce((state) => {
        state.showLoader = value;
      })
    );
  },
  hideModal() {
    set(
      produce((state) => {
        state.modal.show = false;
      })
    );

    setTimeout(() => {
      set(
        produce((state) => {
          state.modal.content = null;
        })
      );
    }, 150);
  }
}));

export function useUiProvider(): UiState;
export function useUiProvider<T>(selector: (state: UiState) => T, equals?: (a: T, b: T) => boolean): T;
export function useUiProvider(selector?: any, equals?: any) {
  return useStore(uiProvider, selector, equals);
}
