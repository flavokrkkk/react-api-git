import { Button, Layout, Menu } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routes";
import { useAppSelector } from "../../../hooks/hooks";
import { useActions } from "../../../hooks/useActions";
import "./Navbar.css";
import { AuthSelectors } from "../../../store/selectors/selectors";

const Navbar: FC = () => {
  const { isAuth, user } = useAppSelector(AuthSelectors);

  const navigate = useNavigate();

  const { logout } = useActions();

  const handleNavigate = () => {
    navigate(RoutePath.LOGIN);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Layout.Header className="navbar__layout">
      <div className="navbar__wrapper">
        <h1 className="navbar__title">Event</h1>
        {isAuth ? (
          <div>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              className="navbar__item"
            >
              <div className="navbar__username">{user.username}</div>

              <div className="navbar__button">
                <Button onClick={handleLogout}>Log out</Button>
              </div>
            </Menu>
          </div>
        ) : (
          <div>
            <Menu theme="dark" mode="horizontal">
              <div className="navbar__button">
                <Button onClick={handleNavigate}>Login</Button>
              </div>
            </Menu>
          </div>
        )}
      </div>
    </Layout.Header>
  );
};

export default Navbar;
