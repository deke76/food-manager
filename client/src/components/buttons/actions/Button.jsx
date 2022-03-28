import classNames from "classnames";
import Link from "react-router-dom";
import "./buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAnglesLeft,
  faAnglesRight,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export default function Button(props) {
  const { onClick, linkTo, icon, text} = props;
  const classes = classNames("button", { text: text !== undefined });

  const body = (
    <div onClick={onClick} className={classes}>
      {text !== undefined && <span className="btn-text">{text}</span>}
      {icon === "plus" && <FontAwesomeIcon icon={faPlus} />}
      {icon === "left" && <FontAwesomeIcon icon={faAnglesLeft} />}
      {icon === "right" && <FontAwesomeIcon icon={faAnglesRight} />}
      {icon === "recipe" && <FontAwesomeIcon icon={faUtensils} />}
    </div>
  );

  return linkTo ? <Link to={linkTo}>{body}</Link> : body;
}
