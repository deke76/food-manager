import { classNames, Link } from "../../../constants";
import { FontAwesomeIcon, faPlus,
  faAnglesLeft,
  faAnglesRight,
  faUtensils,
  faBarcode,
  faTrash,
  faSave, } from "../../../constants"
  import "./buttons.scss";


export default function Button(props) {
  const { onClick, linkTo, icon, text } = props;
  const classes = classNames("button", { text: text !== undefined });

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
    </div>
  );

  return linkTo ? <Link to={linkTo}>{body}</Link> : body;
}
