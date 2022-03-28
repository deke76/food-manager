import classNames from "classnames";
import moment from "moment";
import { useContext, useState } from "react";
// import { locationContext } from "../../../../providers/LocationProvider";
import useFetchServer from "../../../../hooks/useFetchServer";

import Button from "../../../buttons/actions/Button";
import CalendarDay from "./CalendarDay";

import "./Calendar.scss";
import { stateContext } from "../../../../providers/StateProvider";

export default function Calendar(props) {
  // list of objects with date attribute
  // const { events } = props;
  // const { locationID } = useContext(locationContext);
  // const { responseData: events } = useFetchServer(
  //   `locations/${locationID}/foods`
  // );

  const { state } = useContext(stateContext);

  // First day of calendar
  const [firstDay, setFirstDay] = useState(moment().startOf("week"));
  const [selectedDay, setSelectedDay] = useState(moment().format());

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
  const weekElements = [];
  const firstWeek = firstDay.week();

  if (state !== null) {
    const selectedLocation = state
      ? state.locations.filter((loc) => loc.id === state.currentLocation)[0]
      : null;

    const events = selectedLocation.foods;
    // iterate over four weeks and each day of week to build table

    for (let w = 0; w < 6; w++) {
      const dayElements = [];
      const thisWeek = moment().week(firstWeek + w);

      for (let d = 0; d < 7; d++) {
        // Create a new date object for current day in week
        const day = thisWeek.day(d);
        const dayEvents = events.filter((e) =>
          day.isSame(moment(e.date_expires), "day")
        );

        dayElements.push(
          <CalendarDay
            key={d}
            day={day.format()}
            hasEvents={dayEvents.length > 0}
            onClick={() => setSelectedDay(day.format())}
            selected={moment(selectedDay).isSame(day, "day")}
          />
        );
      }
      weekElements.push(<tr key={w}>{dayElements}</tr>);
    }
  }

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
