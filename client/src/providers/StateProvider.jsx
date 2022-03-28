import { createContext, useContext, useEffect, useState } from "react";
import { userContext } from "./UserProvider";
import axios from "axios";

export const stateContext = createContext();

const locationBuilder = (locations, foods) => {
  return locations.map((location) => ({
    ...location,
    foods: foods.filter((food) => food.location_id === location.id),
  }));


  // const result = {};
  
  // locations.forEach((location) => {
  //   result[location.id] = {
  //     ...location,
  //     foods: foods.filter((food) => food.location_id === location.id),
  //   }
  // });
};

export function StateProvider(props) {
  const [state, setState] = useState(null);
  const { user } = useContext(userContext);

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3000/users/${user}/locations`),
      axios.get(`http://localhost:3000/users/${user}/foods`),
    ]).then((all) => {
      const locations = locationBuilder(all[0].data, all[1].data);
      const currentLocation = locations.length > 0 ? locations[0].id : null;

      setState((prev) => ({
        ...prev,
        locations,
        currentLocation,
      }));

    });
  }, [user]);
  
  useEffect(() => {
    console.log("state", state);

    // send state back to database?


    // setState((prev) => ({
    //   ...prev,
    //   currentLocation,
    // }));

  },[state])

  // const incrementUser = () => setUser((prev) => (prev < 20 ? prev + 1 : prev));
  // const decrementUser = () => setUser((prev) => (prev > 1 ? prev - 1 : prev));

  const providerData = { state, setState };

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
}
