import { useContext, useEffect, useState } from "react";
import { locationContext } from "../../../providers/LocationProvider";
import { userContext } from "../../../providers/UserProvider";

import LocationCard from "./locationCard";
import LocationCardNew from "./locationCardNew";
import "./locationCardList.scss";

import axios from "axios";
const API_SERVER = "http://localhost:3000";

export default function LocationList(props) {
  // use contexts
  const { setLocationID } = useContext(locationContext);
  const { user } = useContext(userContext);

  // set location information
  const [locations, setLocations] = useState(null); // list of objects
  useEffect(() => {
    const url = `${API_SERVER}/users/${user}/locations`;
    return axios
      .get(url)
      .then((response) => setLocations(response.data))
      .catch(console.log("could not get users locations"));
  }, [user]);

  const [currentLocation, setCurrentLocation] = useState(0); // index of locations list

  // update location id context whenever current location changes
  useEffect(() => {
    locations && setLocationID(locations[currentLocation].id);
  }, [currentLocation, locations, setLocationID]);

  console.log("current Location", currentLocation);

  // const [newLocationName, setNewLocationName] = useState("");

  // const [showNewLocation, setShowNewLocation] = useState(false);
  // const toggleNewLocation = () => setShowNewLocation((prev) => !prev);

  // const saveNewLocation = () => {
  //   if (newLocationName === "") {
  //     // toggleNewLocation();
  //     return;
  //   }
  //   console.log("newLocationName", newLocationName);
  //   const url = `http://localhost:3000/users/${user}/locations`;
  //   return axios
  //     .post(url, { name: newLocationName, user_id: user })
  //     .then((response) => {
  //       // toggleNewLocation();
  //       setLocations((prev) => [...prev, response.data]);
  //       setNewLocationName("");
  //     });
  // };

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
    <div className="sideways-scrolling-wrapper">
      {locations &&
        locations.map((location, index) => (
          <LocationCard
            key={index}
            location={location}
            selected={index === currentLocation}
            onClick={() => setCurrentLocation(index)}
            onDelete={(event) => {
              event.stopPropagation();
              deleteLocation(location.id);
            }}
          />
        ))}
      <LocationCardNew onAdd={() => console.log("add")} />
    </div>
  );
}
