import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface EventState {
  users: IUser[];
  events: IEvent[];
  isError: string | null;
}
