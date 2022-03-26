import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function FloatingActionButton(props) {
  const { linkTo } = props;
  return (
    <Link to={linkTo}>
      <FontAwesomeIcon icon={faPlusCircle} />
    </Link>
  );
}
