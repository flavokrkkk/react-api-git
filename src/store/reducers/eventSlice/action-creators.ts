import { AppDispatch } from "../..";
import eventSlice from ".";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";

export const EventActionCreators = {
  addAllUser: eventSlice.actions.addAllUsers,
  addNewEvent: eventSlice.actions.addNewEvent,
  addUserError: eventSlice.actions.addUserError,
  fetchUser: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      if (Array.isArray(response.data)) {
        dispatch(EventActionCreators.addAllUser(response.data));
      } else {
        dispatch(
          EventActionCreators.addUserError(
            `Не удалось получить пользователей. Попробуйте еще раз! `
          )
        );
      }
    } catch (err) {
      dispatch(
        EventActionCreators.addUserError(
          `Не удалось получить пользователей. Попробуйте еще раз ${err}!`
        )
      );
    }
  },
  createEvent: (event: IEvent) => (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.addNewEvent(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (err) {
      console.log(err);
    }
  },

  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(
        (current) => current.author === username || current.guest === username
      );
      dispatch(EventActionCreators.addNewEvent(currentUserEvents));
    } catch (err) {
      console.log(err);
    }
  },
};
