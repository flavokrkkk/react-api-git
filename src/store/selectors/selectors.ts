import { RootState } from "./../index";

export const AuthSelectors = (state: RootState) => state.authReducer;

export const EventSelectors = (state: RootState) => state.eventReducer;
