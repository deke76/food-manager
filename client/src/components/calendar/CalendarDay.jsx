import CalendarItem from "./CalendarItem";
import Button from "../buttons/Button";

import moment from "moment";
import classNames from "classnames";
import "./CalendarDay.scss";
import { useState } from "react";

export default function CalendarDay(props) {
  const { day, events, isCalendarStart } = props;
  const date = moment(day);
  const [plusShown, setPlusShown] = useState(false);

  // Add month name if first day in calendar or first day of month
  const addMonth =
    date.isSame(moment(date).startOf("month"), "day") || isCalendarStart;

  // Assign classes to day object
  const classes = classNames("day", {
    weekend: moment(date).day() === 0 || moment(date).day() === 6,
    today: date.isSame(moment(), "day"),
  });
  return (
    <td
      className={classes}
      onMouseEnter={() => setPlusShown(true)}
      onMouseLeave={() => setPlusShown(false)}
    >
      <div className="container">
        <div className="day-add">{plusShown && <Button icon="plus" />}</div>
        <div className="day-num">
          {addMonth && date.format("MMM")} {date.format("D")}
        </div>
        <div className="event-container">
          {events &&
            events.map((e, index) => <CalendarItem key={index} {...e} />)}
        </div>
      </div>
    </td>
  );
}
