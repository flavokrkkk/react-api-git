import { Button, DatePicker, Form, Input, Select } from "antd";
import { FC, useEffect, useState } from "react";
import { rules } from "../../utils/rules";
import "./EventForm.css";
import { Option } from "antd/es/mentions";
import { IUser } from "../../models/IUser";
import { IEvent } from "../../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../../utils/date";
import { useAppSelector } from "../../hooks/hooks";
import { AuthSelectors } from "../../store/selectors/selectors";

interface EventFormProps {
  users: IUser[];
}

const EventForm: FC<EventFormProps> = ({ users }) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  } as IEvent);

  const { user } = useAppSelector(AuthSelectors);

  const handleSelectGuest = (guest: string) => {
    setEvent({ ...event, guest });
  };

  const handleSelectDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, description: e.target.value });
  };

  const handleSelectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const handleSubmit = () => {
    console.log(event);
  };

  useEffect(() => {
    setEvent({ ...event, author: user.username });
  }, []);

  return (
    <Form className="modal__form" onFinish={handleSubmit}>
      <Form.Item
        label="Описание события"
        name="Description"
        rules={[rules.required("PLease enter input description!")]}
      >
        <Input onChange={handleSelectDescription} value={event.description} />
      </Form.Item>

      <Form.Item
        label="Дата события"
        name="Date"
        rules={[rules.required("PLease enter input description!")]}
      >
        <DatePicker
          className="modal__data-picker"
          onChange={(date) => handleSelectDate(date)}
        />
      </Form.Item>

      <Form.Item
        label="Выбрать гостя"
        name="Guest"
        rules={[rules.required("PLease enter input description!")]}
      >
        <Select className="modal__select" onChange={handleSelectGuest}>
          {users.map((user) => (
            <Option key={user.username} value={user.username}>
              {user.username}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item className="form__item">
        <Button block type="primary" htmlType="submit">
          Create Event
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
