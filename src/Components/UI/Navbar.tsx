import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes";
import { useAppSelector } from "../../hooks/hooks";

const Navbar: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(RoutePath.LOGIN);
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "#fff" }}>Egor Yarovitsyn</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={handleNavigate} key={1}>
                Log out
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item onClick={handleNavigate} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
