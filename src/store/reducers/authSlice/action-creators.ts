import authSlice from ".";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
  setIsAuth: authSlice.actions.toggleAuth,
  setUser: authSlice.actions.addUserAuth,
  setIsLoading: authSlice.actions.addUserSucess,
  setError: authSlice.actions.addUserError,
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));

        setTimeout(async () => {
          const response = await UserService.getUsers();
          if (Array.isArray(response.data)) {
            const mockUser = response.data.find(
              (user) => user.username === username && user.password === password
            );
            if (mockUser) {
              localStorage.setItem("auth", "true");
              localStorage.setItem("username", mockUser.username);
              dispatch(AuthActionCreators.setUser(mockUser));
              dispatch(AuthActionCreators.setIsAuth(true));
            } else {
              dispatch(
                AuthActionCreators.setError(`Пользователь не найден в системе!`)
              );
            }
          } else {
            dispatch(
              AuthActionCreators.setError(`Пользователь не найден в системе!`)
            );
          }
        }, 1000);
      } catch (err) {
        dispatch(
          AuthActionCreators.setError(`Пользователя нет в системе ${err}`)
        );
      }
    },

  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
