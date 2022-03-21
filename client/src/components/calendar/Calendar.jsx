import classNames from "classnames";
import moment from "moment";
import { useState } from "react";

import Button from "../buttons/Button";
import CalendarDay from "./CalendarDay";

import "./Calendar.scss";

export default function Calendar(props) {
  // list of objects with date attribute
  const { events } = props;

  // First day of calendar
  const [firstDay, setFirstDay] = useState(moment().startOf("week"));

  // Day names for header
  const weekdayShort = moment.weekdaysShort().map((day, index) => {
    const classes = classNames("week-day", {
      weekend: index === 0 || index === 6,
    });
    return (
      <th key={day} className={classes}>
        {day}
      </th>
    );
  });

  // iterate over four weeks and each day of week to build table
  const weekElements = [];
  const firstWeek = firstDay.week();

  for (let w = 0; w < 4; w++) {
    const dayElements = [];
    const thisWeek = moment().week(firstWeek + w);

    for (let d = 0; d < 7; d++) {
      // Create a new date object for current day in week
      const day = thisWeek.day(d);

      const dayEvents = events.filter((e) => day.isSame(moment(e.date), "day"));

      dayElements.push(
        <CalendarDay
          key={d}
          day={day.format()}
          hasEvents={dayEvents.length > 0}
        />
      );
    }
    weekElements.push(<tr key={w}>{dayElements}</tr>);
  }

  console.log(firstDay);
  return (
    <div className="calendar">
      <header className="header">
        <div className="group">
          <div className="month-year">{firstDay.format("MMM YYYY")}</div>
        </div>
        <div className="group">
          <Button
            icon="left"
            onClick={() => setFirstDay((prev) => moment(prev.add(-7, "days")))}
          />
          <Button
            text="Today"
            onClick={() => setFirstDay(moment().startOf("week"))}
          />
          <Button
            icon="right"
            onClick={() => setFirstDay((prev) => moment(prev.add(7, "days")))}
          />
        </div>
      </header>
      <table>
        <thead>
          <tr>{weekdayShort}</tr>
        </thead>
        <tbody>{weekElements}</tbody>
      </table>
    </div>
  );
}
