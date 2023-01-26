import type { ReactElement, ReactNode } from "react";

export interface ModalContentState {
  show: boolean;
  content: ReactElement | ReactNode | null;
}

export interface UiState {
  showLoader: boolean;
  modal: ModalContentState;
  hideModal(): void;
  showModal(modalContent: ReactNode): void;
  setLoader(value: boolean): void;
}
