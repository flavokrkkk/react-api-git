import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth/index";

export const rootReducer = combineReducers({
  authReducer: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
