import { Button, Layout, Row } from "antd";
import { FC, useEffect, useState } from "react";
import EventCalendar from "../../Components/Calendar/EventCalendar";
import "./Event.css";
import ModalEvent from "../../Components/UI/Modal/ModalEvent";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { EventActionCreators } from "../../store/reducers/eventSlice/action-creators";
import { EventSelectors } from "../../store/selectors/selectors";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { users, isError } = useAppSelector(EventSelectors);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    dispatch(EventActionCreators.fetchUser());
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
      <EventCalendar events={[]} />
      <ModalEvent data={users} visible={modalVisible} onCancel={closeModal} />
    </Layout>
  );
};

export default Event;
