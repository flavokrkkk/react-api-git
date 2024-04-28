import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./index";
import Event from "../Pages/Event";
import Login from "../Pages/Login";

const AppRoutes = () => {
  const auth = false;

  return (
    <>
      {auth ? (
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
