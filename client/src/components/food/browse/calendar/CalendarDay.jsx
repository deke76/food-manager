import moment from "moment";
import classNames from "classnames";
import "./CalendarDay.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function CalendarDay(props) {
  const { day, hasEvents, onClick, selected } = props;
  const date = moment(day);

  const classes = classNames("day", {
    weekend: moment(date).day() === 0 || moment(date).day() === 6,
    today: date.isSame(moment(), "day"),
    event: hasEvents,
    selected
  });

  return (
    <td className={classes} onClick={onClick}>
      <div className="container">
        <div className="day-num">{date.format("D")}</div>
        <div className="day-event-indicator">
          {<FontAwesomeIcon icon={faCircle} />}
        </div>
      </div>
    </td>
  );
}
