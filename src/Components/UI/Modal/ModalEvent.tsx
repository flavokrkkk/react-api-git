import { Modal } from "antd";
import { FC } from "react";
import EventForm from "../../EventForm/EventForm";

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
}

const ModalEvent: FC<ModalProps> = ({ visible, onCancel }) => {
  return (
    <div>
      <Modal
        title="Добавить событие"
        visible={visible}
        footer={null}
        onCancel={onCancel}
      >
        <EventForm />
      </Modal>
    </div>
  );
};

export default ModalEvent;
