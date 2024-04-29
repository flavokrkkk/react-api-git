import { Button, Form, Input } from "antd";
import { FC } from "react";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please enter your username!")]}
      />
      <Input />
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please enter your password!")]}
      />
      <Input />
      <Form.Item style={{ marginTop: "20px" }}>
        <Button type="primary" htmlType="submit">
          Login in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
