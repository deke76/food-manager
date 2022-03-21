import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBallPile,
  faEarthAmerica,
  faCirclePlus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./NavBar.scss";

export default function NavBar(props) {
  return (
    <nav className="nav">
      <div className="icon-container">
        <FontAwesomeIcon icon={faEarthAmerica} />
        <div className="icon-text">Foods</div>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faPlus} />
        <div className="icon-text">Shelves</div>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faCirclePlus} />
        <div className="icon-text">Add Food</div>
      </div>
    </nav>
  );
}
