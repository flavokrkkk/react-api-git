import { Card, Layout, Row } from "antd";
import { FC } from "react";
import LoginForm from "../Components/LoginForm/LoginForm";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify={"center"} align={"middle"} className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
