import { Link, FontAwesomeIcon, faPlusCircle } from "../../constants";
import "./fab.scss"

export default function FloatingActionButton(props) {
  const { linkTo } = props;
  return (
    <Link to={linkTo} className="floating-action-button">
      <FontAwesomeIcon icon={faPlusCircle} />
    </Link>
  );
}
