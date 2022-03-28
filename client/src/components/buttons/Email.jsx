import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./fab.scss"

export default function EmailButton(props) {
  const { linkTo } = props;
  return (
    <Link to={linkTo} className="floating-action-button">
      <FontAwesomeIcon icon={faPlusCircle} />
    </Link>
  );
}