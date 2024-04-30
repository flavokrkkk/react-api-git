import { Modal } from "antd";
import { FC } from "react";
import EventForm from "../../EventForm/EventForm";
import { IUser } from "../../../models/IUser";

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  data: IUser[];
}

const ModalEvent: FC<ModalProps> = ({ visible, onCancel, data }) => {
  return (
    <div>
      <Modal
        title="Добавить событие"
        visible={visible}
        footer={null}
        onCancel={onCancel}
      >
        <EventForm users={data} />
      </Modal>
    </div>
  );
};

export default ModalEvent;
