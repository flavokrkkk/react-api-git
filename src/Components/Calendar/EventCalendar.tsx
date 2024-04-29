import { Calendar } from "antd";
import { FC } from "react";
import { IEvent } from "../../models/IEvent";
import "./EventCalendar.css";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = () => {
  return (
    <div className="calendar__wrapper">
      <Calendar />
    </div>
  );
};

export default EventCalendar;
