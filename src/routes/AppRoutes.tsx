import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./index";
import Event from "../Pages/Event/Event";
import Login from "../Pages/Login/Login";
import { useAppSelector } from "../hooks/hooks";
import { AppSelectors } from "../store/selectors/selectors";

const AppRoutes = () => {
  const { isAuth } = useAppSelector(AppSelectors);

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
