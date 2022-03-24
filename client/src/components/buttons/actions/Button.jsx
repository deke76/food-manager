import classNames from "classnames";
import "./buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCaretRight,
  faPen,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Button(props) {
  const { onClick, icon, text, open } = props;
  const classes = classNames("button", { open });
  return (
    <div onClick={onClick} className={classes}>
      {icon === "plus" && <FontAwesomeIcon icon={faPlus} />}
      {icon === "pen" && <FontAwesomeIcon icon={faPen} />}
      {icon === "caret" && <FontAwesomeIcon icon={faCaretRight} />}
      {icon === "left" && <FontAwesomeIcon icon={faAnglesLeft} />}
      {icon === "right" && <FontAwesomeIcon icon={faAnglesRight} />}
      {text !== undefined && <div className="btn-text">{text}</div>}
    </div>
  );
}
