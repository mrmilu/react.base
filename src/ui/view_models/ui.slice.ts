import type { ReactElement, ReactNode } from "react";

export interface ModalContentState {
  show: boolean;
  content: ReactElement | ReactNode | null;
}

export interface UiSliceState {
  showLoader: boolean;
  modal: ModalContentState;
}
