import { useContext, useEffect, useState } from "react";
import useFetchServer from "../../hooks/useFetchServer";
import { locationContext } from "../../providers/LocationProvider";
import { userContext } from "../../providers/UserProvider";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function LocationList(props) {
  const { setLocation } = useContext(locationContext);
  const { user } = useContext(userContext);

  const [locations, setLocations] = useState(null);

  const [currentLocation, setCurrentLocation] = useState(0);
  useEffect(() => {
    locations && setLocation(locations[currentLocation].id);
  }, [currentLocation, locations, setLocation]);

  const [showNewLocation, setShowNewLocation] = useState(false);
  const [newLocationName, setNewLocationName] = useState("");
  const toggleNewLocation = () => setShowNewLocation((prev) => !prev);

  const saveNewLocation = () => {
    if (newLocationName === "") return;
    const url = `http://localhost:3000/users/${user}/locations`;
    return axios.post(url, { name: newLocationName }).then((response) => {
      toggleNewLocation();
      setNewLocationName("");
      setLocations([...locations, newLocationName]);
    });
  };

  const deleteLocation = (id) => {
    const url = `http://localhost:3000/users/${user}/locations/${id}`;
    return axios.delete(url).then(() => {
      setLocations(locations.filter((i) => i.id !== id));
    });
  };

  useEffect(() => {
    const url = `http://localhost:3000/users/${user}/locations`;
    return axios.get(url).then((response) => setLocations(response.data));
  }, [user]);

  return (
    <ul className="location-dropdown">
      {locations &&
        locations.map((loc, index) => (
          <li
            key={index}
            className={currentLocation === index ? "selected" : ""}
            onClick={() => setCurrentLocation(index)}
          >
            <span className="text">{loc.name}</span>
            <FontAwesomeIcon
              className="btn"
              icon={faTrashAlt}
              onClick={() => deleteLocation(loc.id)}
            />
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
  );
}
