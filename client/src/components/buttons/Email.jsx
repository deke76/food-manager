import { faPlusCircle, FontAwesomeIcon, Link } from "../../constants";

import "./fab.scss"

export default function EmailButton(props) {
  const { linkTo } = props;
  return (
    <Link to={linkTo} className="floating-action-button">
      <FontAwesomeIcon icon={faPlusCircle} />
    </Link>
  );
}