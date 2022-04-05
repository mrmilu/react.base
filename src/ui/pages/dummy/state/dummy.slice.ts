import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import type { DummySliceState } from "@/src/ui/pages/dummy/view_models/dummy.slice";
import type { RootState } from "@/src/ui/state";
import { setLoader } from "@/src/ui/state/ui.slice";
import { locator } from "@/src/core/app/ioc";
import { TYPES } from "@/src/core/app/ioc/types";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { GetDummyUsersUseCase } from "@/src/core/dummy/domain/use_cases/get_dummy_users_use_case";
import type { GetDummyPostsUseCase } from "@/src/core/dummy/domain/use_cases/get_dummy_posts_use_case";

const initialState = (): DummySliceState => ({
  users: [],
  posts: [],
  loading: false
});

export const getUsersThunk = createAsyncThunk("dummy.slice/getUsers", async (arg, { dispatch }) => {
  dispatch(setLoader(true));
  try {
    const getDummyUsersUseCase = await locator.get<IocProvider<GetDummyUsersUseCase>>(TYPES.GetDummyUsersUseCase)();
    return getDummyUsersUseCase.execute();
  } finally {
    dispatch(setLoader(false));
  }
});

export const getPostsThunk = createAsyncThunk("dummy.slice/getPosts", async (arg, { dispatch }) => {
  dispatch(setLoader(true));
  try {
    const getDummyPostsUseCase = await locator.get<IocProvider<GetDummyPostsUseCase>>(TYPES.GetDummyPostsUseCase)();
    return getDummyPostsUseCase.execute();
  } finally {
    dispatch(setLoader(false));
  }
});

const uiSlice = createSlice({
  name: "ui.slice",
  initialState: initialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    });
    builder.addCase(getUsersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    });
    builder.addCase(getPostsThunk.pending, (state) => {
      state.loading = true;
    });
  }
});

function selectDummyBase(state: RootState) {
  return state.dummy;
}

export const getUsers = createSelector([selectDummyBase], (slice) => slice.users);
export const getPosts = createSelector([selectDummyBase], (slice) => slice.posts);
export const getLoadingState = createSelector([selectDummyBase], (slice) => slice.loading);

export default uiSlice.reducer;
