import { Calendar } from "antd";
import { FC } from "react";
import { IEvent } from "../../models/IEvent";
import "./EventCalendar.css";
import { Moment } from "moment";
import { formatDate } from "../../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(
      (dateEvent) => dateEvent.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, i) => (
          <div key={i}>{ev.description}</div>
        ))}
      </div>
    );
  };
  return (
    <div className="calendar__wrapper">
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
};

export default EventCalendar;
