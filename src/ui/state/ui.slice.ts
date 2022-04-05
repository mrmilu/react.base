import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import type { UiSliceState } from "../view_models/ui.slice";
import type { ReactNode } from "react";

const initialState = (): UiSliceState => ({
  showLoader: false,
  modal: {
    show: false,
    content: null
  }
});

export const showModal = createAsyncThunk<void, ReactNode>("ui/showModal", async (modalContent, { dispatch }) => {
  dispatch(setModalContent(modalContent));
  setTimeout(() => {
    dispatch(setModalShow(true));
  }, 150);
});

export const hideModal = createAsyncThunk<void, ReactNode>("ui/hideModal", async (modalContent, { dispatch }) => {
  dispatch(setModalShow(false));
  setTimeout(() => {
    dispatch(setModalContent(null));
  }, 400);
});

const uiSlice = createSlice({
  name: "ui.slice",
  initialState: initialState(),
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.showLoader = action.payload;
    },
    setModalShow: (state, action: PayloadAction<boolean>) => {
      state.modal.show = action.payload;
    },
    setModalContent: (state, action: PayloadAction<ReactNode>) => {
      state.modal.content = action.payload;
    }
  }
});

function selectUiBase(state: RootState) {
  return state.ui;
}

export const getLoaderState = createSelector([selectUiBase], (slice) => slice.showLoader);
export const getShowModal = createSelector([selectUiBase], (slice) => slice.modal.show);
export const getModalContent = createSelector([selectUiBase], (slice) => slice.modal.content);

export const { setLoader, setModalShow, setModalContent } = uiSlice.actions;
export default uiSlice.reducer;
