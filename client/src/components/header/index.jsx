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
  const { currentLocation, setCurrentLocation } = props;
  const { user, incrementUser, decrementUser } = useContext(userContext);

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleLocationDropdown = () => setShowLocationDropdown((prev) => !prev);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);

  const { responseData } = useFetchServer("shelves");
  const shelves = responseData;

  return (
    <>
      <nav className="header">
        <div className="group title">
          <div className="app-title">Pantryful</div>{" "}
        </div>
        <div className="group">
          <div className="location-path" onClick={toggleLocationDropdown}>
            House/Pantry
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
          <li>House/Fridge</li>
          <li>House/Freezer</li>
          <li>Cabin/Freezer 1</li>
          <li>Cabin/Freezer 2</li>
        </ul>
      )}
    </>
  );
}
