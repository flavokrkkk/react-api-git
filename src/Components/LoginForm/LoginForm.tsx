import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { rules } from "../../utils/rules";
import { useAppSelector } from "../../hooks/hooks";
import "./LoginForm.css";
import { useActions } from "../../hooks/useActions";
import { AuthSelectors } from "../../store/selectors/selectors";

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useActions();
  const { isError, isLoading } = useAppSelector(AuthSelectors);

  const handleSubmit = () => {
    login(username, password);
  };

  //onChange
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setPassword(event.target.value);
  };

  return (
    <Form onFinish={handleSubmit} className="form">
      {isError && <div className="form__error">{isError}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please enter your username!")]}
      />
      <Input
        className="form__input"
        value={username}
        onChange={handleChangeName}
      />
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please enter your password!")]}
      />
      <Input
        className="form__input"
        value={password}
        onChange={handleChangePassword}
        type="password"
      />
      <Form.Item className="form__item">
        <Button block type="primary" htmlType="submit" loading={isLoading}>
          Login in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
