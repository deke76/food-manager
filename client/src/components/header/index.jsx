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
import usePostLocationServer from "../../hooks/usePostLocationServer";
import LocationList from "./locationList";

export default function HeaderBar(props) {
  const { responseData: locations } = useFetchServer("locations");

  const { user, incrementUser, decrementUser } = useContext(userContext);
  const { setLocation } = useContext(locationContext);
  const [currentLocation, setCurrentLocation] = useState(0);

  // set location context
  useEffect(() => {
    locations && setLocation(locations[currentLocation].id);
  }, [currentLocation, locations, setLocation]);

  // toggle UI elements
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showProfileChanger, setShowProfileChanger] = useState(false);
  const toggleLocationDropdown = () => setShowLocationDropdown((prev) => !prev);
  const toggleProfileChanger = () => setShowProfileChanger((prev) => !prev);

  // states for creating a new location
  const [newLocationName, setNewLocationName] = useState("");
  const [showNewLocation, setShowNewLocation] = useState(false);
  const toggleNewLocation = () => setShowNewLocation((prev) => !prev);

  const saveNewLocation = () => {
    toggleNewLocation();
    const url = `http://localhost:3000/users/${user}/locations`;
    return axios
      .post(url, { name: newLocationName })
      .then(response => {
        setCurrentLocation(locations.length - 1);
        console.log("response",response)
      });
  };

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
