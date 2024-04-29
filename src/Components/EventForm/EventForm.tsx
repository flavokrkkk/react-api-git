import { Form, Input } from "antd";
import { FC } from "react";
import { rules } from "../../utils/rules";

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="Description"
        rules={[rules.required("PLease enter input description!")]}
      />
      <Input />
    </Form>
  );
};

export default EventForm;
