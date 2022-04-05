import classNames from "classnames";
import { Link } from "react-router-dom";
import "./buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAnglesLeft,
  faAnglesRight,
  faUtensils,
  faBarcode,
  faTrash,
  faSave,
  faUser,
  faCheck,
  faCamera,
  faUpload,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Button(props) {
  const { onClick, linkTo, icon, text, className } = props;
  const classes = classNames("button", className, { text: text !== undefined });

  const body = (
    <div onClick={onClick} className={classes}>
      {text !== undefined && <span className="btn-text">{text}</span>}
      {icon === "plus" && <FontAwesomeIcon icon={faPlus} />}
      {icon === "left" && <FontAwesomeIcon icon={faAnglesLeft} />}
      {icon === "right" && <FontAwesomeIcon icon={faAnglesRight} />}
      {icon === "recipe" && <FontAwesomeIcon icon={faUtensils} />}
      {icon === "barcode" && <FontAwesomeIcon icon={faBarcode} />}
      {icon === "delete" && <FontAwesomeIcon icon={faTrash} />}
      {icon === "save" && <FontAwesomeIcon icon={faSave} />}
      {icon === "profile" && <FontAwesomeIcon icon={faUser} />}
      {icon === "check" && <FontAwesomeIcon icon={faCheck} />}
      {icon === "camera" && <FontAwesomeIcon icon={faCamera} />}
      {icon === "file" && <FontAwesomeIcon icon={faUpload} />}
      {icon === "email" && <FontAwesomeIcon icon={faEnvelope} />}
      {icon === "heart" && <FontAwesomeIcon icon={faHeart} />}
    </div>
  );

  return linkTo ? <Link to={linkTo}>{body}</Link> : body;
}
