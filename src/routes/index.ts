import Event from "../Pages/Event";
import Login from "../Pages/Login";

//Прописываем interface для routes
export interface IRoute {
  path: string;
  component: React.ComponentType;
}

//Enum для path-name
export const enum RoutePath {
  LOGIN = "/login",
  EVENTS = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RoutePath.LOGIN,
    component: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutePath.EVENTS,
    component: Event,
  },
];
