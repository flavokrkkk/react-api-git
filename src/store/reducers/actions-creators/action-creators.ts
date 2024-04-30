import { AuthActionCreators } from "../authSlice/action-creators";
import { EventActionCreators } from "../eventSlice/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
