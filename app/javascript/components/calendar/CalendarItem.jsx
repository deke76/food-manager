import classNames from "classnames";
import moment from "moment";
import "./CalendarItem.scss";

export default function CalendarItem(props) {
  const { name, location, date, lifespan } = props;

  // determine freshness of food using 1/4 of lifespan as cutoff
  const debatableDate = moment().add(lifespan / 4, "days");

  const classes = classNames("calendar-item", {
    expired: moment(date).isBefore(moment()),
    debatable:
      moment(date).isSameOrAfter(moment()) &&
      moment(date).isBefore(debatableDate),
    fresh: moment(date).isSameOrAfter(debatableDate),
  });

  return (
    <div className={classes}>
      <div className="calendar-item--name">{name}</div>
      <div className="calendar-item--location">{location}</div>
    </div>
  );
}
