import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LocationCardNew(props) {
  return (
    <div className="location-card new">
      <FontAwesomeIcon icon={faPlusCircle} />
      <div className="location-card__details">add a new location</div>
    </div>
  );
}
