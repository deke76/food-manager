import { useContext, useEffect, useState } from "react";
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
import SelectOneDropdown from "../buttons/selectOne";
import axios from "axios";

export default function HeaderBar(props) {
  const { responseData: locations, responseError } =
    useFetchServer("locations");

  const addLocation = () => {
    console.log("new location");
  };

  const { user, incrementUser, decrementUser } = useContext(userContext);
  const [currentLocation, setCurrentLocation] = useState(0);
  const { setLocation } = useContext(locationContext);

  useEffect(() => {
    locations && setLocation(locations[currentLocation].id);
  }, [currentLocation, locations, setLocation]);

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleLocationDropdown = () => setShowLocationDropdown((prev) => !prev);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);
  
  const [showNewLocation, setShowNewLocation] = useState(false);
  const [newLocationName, setNewLocationName] = useState("");
  const toggleNewLocation = () => setShowNewLocation((prev) => !prev);

  const saveNewLocation = () => {
    useEffect(() => axios.)
  }

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
            {locations && locations[currentLocation].name}
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
      {/* {showLocationDropdown && (
        <SelectOneDropdown
          selected={currentLocation}
          setSelected={setCurrentLocation}
          choices={locations.map((location) => location.name)}
          newChoiceText="Add a new Location..."
          newChoiceCallback={addLocation}
          newChoiceLink="/locations/add"
        />
      )} */}
      {showLocationDropdown && locations && (
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
              <span onClick={toggleNewLocation}>Save</span>
            </li>
          )}
          {!showNewLocation && (
            <li
              className="new-choice"
              onClick={toggleNewLocation}
            >
              Add a new Location...
            </li>
          )}
        </ul>
      )}
    </>
  );
}
