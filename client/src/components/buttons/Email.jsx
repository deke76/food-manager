// import modules
import { Link } from "react-router-dom";

// import React components
import { faPlusCircle, FontAwesomeIcon } from "../Constants";

// import style sheets
import "./fab.scss"

export default function EmailButton(props) {
  const { linkTo } = props;
  return (
    <Link to={linkTo} className="floating-action-button">
      <FontAwesomeIcon icon={faPlusCircle} />
    </Link>
  );
}