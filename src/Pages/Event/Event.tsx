import { Button, Layout, Row } from "antd";
import { FC, useEffect, useState } from "react";
import EventCalendar from "../../Components/Calendar/EventCalendar";
import "./Event.css";
import ModalEvent from "../../Components/UI/Modal/ModalEvent";
import { useAppSelector } from "../../hooks/hooks";
import { AuthSelectors, EventSelectors } from "../../store/selectors/selectors";
import { useActions } from "../../hooks/useActions";
import { IEvent } from "../../models/IEvent";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { fetchUser, createEvent, fetchEvents } = useActions();

  const { users, isError, events } = useAppSelector(EventSelectors);
  const { user } = useAppSelector(AuthSelectors);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmitEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  useEffect(() => {
    fetchUser();
    fetchEvents(user.username);
  }, []);

  if (isError) {
    return <h2>{isError}</h2>;
  }

  return (
    <Layout>
      <h1 className="calendar__title">Event-Calendar</h1>
      <Row justify={"center"}>
        <Button className="calendar__button" onClick={showModal}>
          Добавить событие
        </Button>
      </Row>
      <EventCalendar events={events} />
      <ModalEvent
        submit={handleSubmitEvent}
        data={users}
        visible={modalVisible}
        onCancel={closeModal}
      />
    </Layout>
  );
};

export default Event;
