import { useContext, useState } from "react";
import useFetchServer from "../../hooks/useFetchServer";
import { userContext } from "../../providers/UserProvider";
import { locationContext } from "../../providers/LocationProvider";
import { Link } from "react-router-dom";

import {
  faUser,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";
import LocationList from "./locationList";

export default function HeaderBar(props) {
  const { user, incrementUser, decrementUser } = useContext(userContext);
  const { locationID } = useContext(locationContext);
  const { responseData: location } = useFetchServer(`locations/${locationID}`)
  
  // console.log("location",location)
  // console.log("locationName",location)
  
  // toggle UI elements
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleLocationDropdown = () => setShowLocationDropdown((prev) => !prev);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);

  return (
    <>
      <nav className="header">
        <Link to="/" onClick={() => setShowLocationDropdown(false)}>
          <div className="group title">
            <div className="app-logo">🍌</div>
            <div className="app-title">Pantryful</div>{" "}
          </div>
        </Link>
        <div className="group">
          <div className="location-path" onClick={toggleLocationDropdown}>
            {location && location.name}
          </div>
          <div className="profile-image" onClick={toggleProfileChanger}>
            <FontAwesomeIcon icon={faUser} />
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

      <LocationList/>
      {/* {showLocationDropdown && locations && (
        <ul className="location-dropdown">
          {locations.map((location, index) => (
            <li
              key={index}
              className={index === currentLocation ? "selected" : ""}
              onClick={() => {
                setCurrentLocation(index);
                setLocation(location.id);
              }}
            >
              {location.name}
            </li>
          ))}
          {showNewLocation && (
            <li className="new-choice">
              <input
                value={newLocationName}
                onChange={(event) => setNewLocationName(event.target.value)}
              />
              <span onClick={saveNewLocation}>Save</span>
            </li>
          )}
          {!showNewLocation && (
            <li className="new-choice" onClick={toggleNewLocation}>
              Add a new Location...
            </li>
          )}
        </ul>
      )} */}
    </>
  );
}
