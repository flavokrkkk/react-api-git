import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

export const initialState = <AuthState>{
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
  },
});

export default authSlice;
