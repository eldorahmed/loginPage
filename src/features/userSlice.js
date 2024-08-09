import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthReady: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    isAuthReadyChange: (state) => {
      state.isAuthReady = true;
    },
  },
});
export const { login, logout, isAuthReadyChange } = userSlice.actions;

export default userSlice.reducer;
