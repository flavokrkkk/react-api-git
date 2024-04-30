import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { EventState } from "./types";
import { IEvent } from "../../../models/IEvent";

export const initialState = <EventState>{
  users: [],
  events: [],
  isError: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addAllUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    addNewEvent(state, { payload }: PayloadAction<IEvent[]>) {
      state.events = payload;
    },
    addUserError(state, { payload }: PayloadAction<string>) {
      state.isError = payload;
    },
  },
});

export default eventSlice;
