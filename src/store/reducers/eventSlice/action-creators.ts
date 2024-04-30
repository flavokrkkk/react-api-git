import { AppDispatch } from "../..";
import eventSlice from ".";
import UserService from "../../../api/UserService";

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
};
