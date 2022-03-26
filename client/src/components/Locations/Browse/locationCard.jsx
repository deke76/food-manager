import "./locationCard.scss";
import classNames from "classnames";

export default function LocationCard(props) {
  const { location, selected, onClick, onDelete } = props;
  const classes = classNames("location-card", {
    "location-card__selected": selected,
  });
  return (
    <div className={classes} onClick={onClick}>
      <header>
        <h4 className="location-card__title">{location.name}</h4>
        <div className="location-card__quantity">
          {location.num_children} items
        </div>
      </header>
      <article className="location-card__details">
        <div>
          {location.city}
        </div>
        <div>{location.country}</div>
      </article>
      <div className="location-card__button" onClick={onDelete}>
        delete
      </div>
    </div>
  );
}
