// import modules
import classNames from "classnames";

// import React components
import { Button } from "../Constants";

// import stylesheets
import "./locationCard.scss";

export default function LocationCard(props) {
  const { location, selected, onClick, onDelete, items, collapsed } = props;
  const classes = classNames("location-card", {
    selected,
    collapsed,
  });
  return (
    <div className={classes} onClick={onClick}>
      <header>
        <h4 className="location-card__title">{location.name}</h4>
        <div className="quantity">
          {items} items
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
