import { useContext, useState } from "react";
import useFetchServer from "../../hooks/useFetchServer";
import { userContext } from "../../providers/UserProvider";

import {
  faUserAstronaut,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function HeaderBar(props) {
  const { responseData: locations, responseError } =
    useFetchServer("locations");
  console.log("locations", locations);
  console.log("error", responseError);

  const { user, incrementUser, decrementUser } = useContext(userContext);

  const [currentLocation, setCurrentLocation] = useState(0);

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleLocationDropdown = () => setShowLocationDropdown((prev) => !prev);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);

  return (
    <>
      <nav className="header">
        <div className="group title">
          <div className="app-title">Pantryful</div>{" "}
        </div>
        <div className="group">
          <div className="location-path" onClick={toggleLocationDropdown}>
            {locations && locations[currentLocation].name}
          </div>
          <div className="profile-image" onClick={toggleProfileChanger}>
            <FontAwesomeIcon icon={faUserAstronaut} />
          </div>
          {showProfileChanger && (
            <div className="profile-switcher">
              <FontAwesomeIcon icon={faCaretLeft} onClick={decrementUser} />
              <div className="user-number">{user}</div>
              <FontAwesomeIcon icon={faCaretRight} onClick={incrementUser} />
            </div>
          )}
        </div>
      </nav>
      {showLocationDropdown && (
        <ul className="location-dropdown">
          {locations && locations.map((location, index) => (
            <li key={index} onClick={() => setCurrentLocation(index)}>
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
