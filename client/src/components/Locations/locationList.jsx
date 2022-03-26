import { useContext, useEffect, useState } from "react";
import useFetchServer from "../../hooks/useFetchServer";
import { locationContext } from "../../providers/LocationProvider";
import { userContext } from "../../providers/UserProvider";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import 'dotenv/config'

const { API_SERVER } = process.env;
export default function LocationList(props) {
  // const { setLocationID } = useContext(locationContext);
  const { user } = useContext(userContext);

  
  // set location information
  const [locations, setLocations] = useState([]); // list of strings
  useEffect(() => {
    const url = `${API_SERVER}/users/${user}/locations`;
    return axios
      .get(url)
      .then((response) => setLocations(response.data))
      .catch(console.log("Could not get users locations"));
  }, [user]);

  useEffect(() => {
    const locationNames = locations.map(location => location.name);
  },[locations])

  // const [locations, setLocations] = useState(null);

  // const [currentLocation, setCurrentLocation] = useState(0);

  // update location id state whenever current location changes
  // useEffect(() => {
  //   locations && setLocationID(locations[currentLocation].id);
  // }, [currentLocation, locations, setLocationID]);

  // const [showNewLocation, setShowNewLocation] = useState(false);
  const [newLocationName, setNewLocationName] = useState("");
  // const toggleNewLocation = () => setShowNewLocation((prev) => !prev);

  const saveNewLocation = () => {
    if (newLocationName === "") {
      // toggleNewLocation();
      return;
    }
    console.log("newLocationName", newLocationName);
    const url = `http://localhost:3000/users/${user}/locations`;
    return axios
      .post(url, { name: newLocationName, user_id: user })
      .then((response) => {
        // toggleNewLocation();
        setLocations((prev) => [...prev, response.data]);
        setNewLocationName("");
      });
  };

  // const saveNewLocation = () => {
  //   console.log(newLocationName);
  // };

  const deleteLocation = (id) => {
    const url = `http://localhost:3000/users/${user}/locations/${id}`;
    return axios.delete(url).then(() => {
      setLocations(locations.filter((i) => i.id !== id));
    });
  };

  return (
    <div style={{ paddingTop: "48px" }}>
      <input
        type="text"
        value={newLocationName}
        placeholder="New Location Name..."
        onChange={(event) => setNewLocationName(event.target.value)}
      />
      <button onClick={() => saveNewLocation()}>Enter</button>
      {locations &&
        locations.map((location, index) => (
          <div key={index}>
            <span>{location.name}</span>
            <span>{location.id}</span>
            <button onClick={() => deleteLocation(location.id)}>Delete</button>
          </div>
        ))}
    </div>
  );

  // return (
  //   <ul className="location-dropdown" style={{ paddingTop: "48px" }}>
  //     {locations &&
  //       locations.map((loc, index) => (
  //         <li
  //           key={index}
  //           className={currentLocation === index ? "selected" : ""}
  //           onClick={() => setCurrentLocation(index)}
  //         >
  //           <span className="text">{loc.name}</span>
  //           <FontAwesomeIcon
  //             className="btn"
  //             icon={faTrashAlt}
  //             onClick={() => deleteLocation(loc.id)}
  //           />
  //         </li>
  //       ))}
  //     {showNewLocation && (
  //       <li className="new-choice">
  //         <input
  //           value={newLocationName}
  //           onChange={(event) => setNewLocationName(event.target.value)}
  //         />
  //         <span onClick={saveNewLocation}>Save</span>
  //       </li>
  //     )}
  //     {!showNewLocation && (
  //       <li className="new-choice" onClick={toggleNewLocation}>
  //         Add a new Location...
  //       </li>
  //     )}
  //   </ul>
  // );
}
