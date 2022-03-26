import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LocationCardNew(props) {
  const { onAdd } = props;
  return (
    <Link to="/locations/add">
      <div className="location-card new" onClick={onAdd}>
        <FontAwesomeIcon icon={faPlusCircle} />
        <div className="location-card__details">add a new location</div>
      </div>
    </Link>
  );
}
