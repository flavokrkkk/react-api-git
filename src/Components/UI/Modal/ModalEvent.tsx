import { Modal } from "antd";
import { FC } from "react";
import EventForm from "../../EventForm/EventForm";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  data: IUser[];
  submit: (event: IEvent) => void;
}

const ModalEvent: FC<ModalProps> = ({ visible, onCancel, data, submit }) => {
  return (
    <div>
      <Modal
        title="Добавить событие"
        visible={visible}
        footer={null}
        onCancel={onCancel}
      >
        <EventForm submit={submit} users={data} />
      </Modal>
    </div>
  );
};

export default ModalEvent;
