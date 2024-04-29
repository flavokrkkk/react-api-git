import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./index";
import Event from "../Pages/Event";
import Login from "../Pages/Login";
import { useAppSelector } from "../hooks/hooks";

const AppRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
          <Route path="*" Component={Event} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
          <Route path="*" Component={Login} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
