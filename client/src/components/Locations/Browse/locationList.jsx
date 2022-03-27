import { useContext, useEffect, useState } from "react";
import { userContext } from "../../../providers/UserProvider";

import LocationCard from "./locationCard";
import LocationCardNew from "./locationCardNew";
import "./locationList.scss";

import axios from "axios";
import { stateContext } from "../../../providers/StateProvider";

export default function LocationList(props) {
  const { user } = useContext(userContext);
  const { state, setState } = useContext(stateContext);

  const [showCards, setShowCards] = useState(false);

  const deleteLocation = (id) => {
    const url = `http://localhost:3000/users/${user}/locations/${id}`;
    return axios.delete(url).then(() => {
      setState((prev) => ({
        ...prev,
        locations: prev.locations.filter((location) => location.id !== id),
        currentLocation:
          id === prev.currentLocation
            ? prev.locations[0].id
            : prev.currentLocation,
      }));
    });
  };

  const defaultLocation = {
    name: "",
    country: "Canada",
    city: "Calgary",
    province: "",
  };

  const [newLocation, setNewLocation] = useState(defaultLocation);

  const saveNewLocation = () => {
    if (newLocation.name === "") {
      return;
    }
    const url = `http://localhost:3000/users/${user}/locations`;
    return axios
      .post(url, { ...newLocation, user_id: user })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          locations: [...prev.locations, { ...response.data, foods: [] }],
        }));

        setNewLocation(defaultLocation);
      });
  };

  const selectedLocation = state
    ? state.locations.filter((loc) => loc.id === state.currentLocation)[0]
    : null;

  return (
    <div className="locations-wrapper">
      {showCards && (
        <>
          {state &&
            state.locations.map((location, index) => (
              <LocationCard
                key={index}
                location={location}
                selected={location.id === state.currentLocation}
                onClick={() => {
                  setShowCards(false);
                  setState((prev) => ({
                    ...prev,
                    currentLocation: location.id,
                  }));
                }}
                onDelete={(event) => {
                  event.stopPropagation();
                  deleteLocation(location.id);
                }}
              />
            ))}
          <LocationCardNew
            onSave={saveNewLocation}
            newLocation={newLocation}
            setNewLocation={setNewLocation}
          />
        </>
      )}
      {!showCards && state && (
        <div className="single-location" onClick={() => setShowCards(true)}>
          <h4>{selectedLocation.name}</h4>
          <div>{selectedLocation.foods.length} items</div>
        </div>
      )}
    </div>
  );
}
