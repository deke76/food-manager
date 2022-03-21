import { useState } from "react";
import classNames from "classnames";
import Button from "../buttons/Button";

import "./LocationListItem.scss";

function LocationListItem(props) {
  const [open, setOpen] = useState(false);
  const [iconsShown, setIconsShown] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const { id, name, children, addItem } = props;
  const classes = classNames("location", { open });

  return (
    <li>
      <span
        className={classes}
        onMouseEnter={() => setIconsShown(true)}
        onMouseLeave={() => setIconsShown(false)}
      >
        <div className="group">
          <Button icon="caret" open={open} onClick={toggleOpen} />
          <div className="location-name">{name}</div>
        </div>
        {iconsShown && (
          <div className="group">
            <Button icon="pen" />
            <Button icon="plus" />
          </div>
        )}
      </span>
      {open && children.length > 0 && (
        <ul>
          {children.map((child, index) => (
            <LocationListItem key={index} {...child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default LocationListItem;
