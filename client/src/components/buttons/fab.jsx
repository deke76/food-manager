import { faPlusCircle, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./fab.scss"

export default function FloatingActionButton(props) {
  const { linkTo } = props;
  return (
    <div container='fab-container'>
      <div>
        <Link to={linkTo.foods} className="floating-action-button">
          <FontAwesomeIcon icon={faUtensils} />
        </Link>
      </div>
      <div>
        <Link to={linkTo.recipes} className="floating-action-button">
          <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
      </div>
    </div>
  );
}
