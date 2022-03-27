// Component & React dependencies
import { classNames, FontAwesomeIcon, faPlus,
  faCaretRight, faPen, faAnglesLeft, faAnglesRight } from '../../../constants';

// Stylesheets
import "./buttons.scss";

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
