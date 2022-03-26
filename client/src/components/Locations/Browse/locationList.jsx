import { useContext, useEffect, useState } from "react";
import { locationContext } from "../../../providers/LocationProvider";
import { userContext } from "../../../providers/UserProvider";

import LocationCard from "./locationCard";
import LocationCardNew from "./locationCardNew";
import "./locationList.scss";

import axios from "axios";

import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_SERVER = "http://localhost:3000";

export default function LocationList(props) {
  // use contexts
  const { setLocationID } = useContext(locationContext);
  const { user } = useContext(userContext);

  const [showCards, setShowCards] = useState(false);

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

  const deleteLocation = (id) => {
    const url = `http://localhost:3000/users/${user}/locations/${id}`;
    return axios.delete(url).then(() => {
      setLocations(locations.filter((i) => i.id !== id));
    });
  };

  return (
    <div className="locations-wrapper">
      {showCards && (
        <div className="sideways-scrolling-wrapper">
          {locations &&
            locations.map((location, index) => (
              <LocationCard
                key={index}
                location={location}
                selected={index === currentLocation}
                onClick={() => {
                  setShowCards(false);
                  setCurrentLocation(index);
                }}
                onDelete={(event) => {
                  event.stopPropagation();
                  deleteLocation(location.id);
                }}
              />
            ))}
          <LocationCardNew />
        </div>
      )}
      {!showCards && (
        <div className="single-location" onClick={() => setShowCards(true)}>
          {locations && <h4>{locations[currentLocation].name}</h4>}
        </div>
      )}
    </div>
  );
}
