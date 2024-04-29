import { Button, Layout, Row } from "antd";
import { FC, useState } from "react";
import EventCalendar from "../../Components/Calendar/EventCalendar";
import "./Event.css";
import ModalEvent from "../../Components/UI/Modal/ModalEvent";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <h1 className="calendar__title">Event-Calendar</h1>
      <Row justify={"center"}>
        <Button className="calendar__button" onClick={showModal}>
          Добавить событие
        </Button>
      </Row>
      <EventCalendar events={[]} />
      <ModalEvent visible={modalVisible} onCancel={closeModal} />
    </Layout>
  );
};

export default Event;
