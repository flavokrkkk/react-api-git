import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { IUser } from "../../../models/IUser";

export const initialState = <AuthState>{
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
    addUserAuth(state, { payload }: PayloadAction<IUser>) {
      state.user = payload;
      state.isLoading = false;
    },
    addUserSucess(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    addUserError(state, { payload }: PayloadAction<string>) {
      state.isError = payload;
      state.isLoading = false;
    },
  },
});

export default authSlice;
