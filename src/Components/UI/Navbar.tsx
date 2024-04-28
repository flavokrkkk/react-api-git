import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes";

const Navbar: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(RoutePath.LOGIN);
  };
  const auth = true;

  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
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
