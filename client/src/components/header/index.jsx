import { useContext, useState } from "react";
import { useFetchServer } from "../../constants";
import { userContext } from "../../providers/UserProvider";
import classNames from "classnames";

import {
  faUser,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";
import SelectOneDropdown from "../buttons/selectOne";

export default function HeaderBar(props) {
  const { responseData: locations, responseError } =
    useFetchServer('locations');
  const { responseData: foods } = useFetchServer('foods');

  const addLocation = () => {
    console.log("new location");
  };

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
          <div className="app-logo">🍌</div>
          <div className="app-title">Pantryful</div>{" "}
        </div>
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
      {showLocationDropdown && (
        <SelectOneDropdown
          selected={currentLocation}
          setSelected={setCurrentLocation}
          choices={locations.map(location => location.name)}
          newChoiceText="Add a new Location..."
          newChoiceCallback={addLocation}
        />
      )}
    </>
  );
}
