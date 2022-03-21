import classNames from "classnames";
import "./buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core"; // <-- import styles to be used

export default function Button(props) {
  const { onClick, icon, text, open} = props;
  const classes = classNames("button", {open});
  return (
    <div onClick={onClick} className={classes}>
      {icon === "plus" && <FontAwesomeIcon icon={solid("plus")} />}
      {icon === "pen" && <FontAwesomeIcon icon={solid("pen")} />}
      {icon === "caret" && <FontAwesomeIcon icon={solid("caret-right")} />}
      {icon === "left" && <FontAwesomeIcon icon={solid("angles-left")} />}
      {icon === "right" && <FontAwesomeIcon icon={solid("angles-right")} />}
      {text !== undefined && <div className="btn-text">{text}</div>}
    </div>
  );
}
