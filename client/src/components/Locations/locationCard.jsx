import "./locationCard.scss";
import classNames from "classnames";
import Button from "../buttons/actions/Button";

export default function LocationCard(props) {
  const { location, selected, onClick, onDelete, newCard, collapsed } = props;
  const classes = classNames("location-card", {
    selected,
    collapsed,
  });
  return (
    <div className={classes} onClick={onClick}>
      <header>
        <h4 className="location-card__title">{location.name}</h4>
        <div className="location-card__quantity">
          {location.foods.length} items
        </div>
      </header>
      {!collapsed && (
        <article className="location-card__details">
          <div>{location.city}</div>
          <div>{location.country}</div>
          <Button icon="delete" onClick={onDelete} />
        </article>
      )}
    </div>
  );
}
