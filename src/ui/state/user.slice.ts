import type { RootState } from "./index";
import type { UserSliceState } from "@/src/ui/view_models/user.slice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = (): UserSliceState => ({
  logged: false
});

const userSlice = createSlice({
  name: "user.slice",
  initialState: initialState(),
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.logged = action.payload;
    }
  }
});

function selectUiBase(state: RootState) {
  return state.user;
}

export const getLoggedState = createSelector([selectUiBase], (slice) => slice.logged);
export const { setLogged } = userSlice.actions;
export default userSlice.reducer;
