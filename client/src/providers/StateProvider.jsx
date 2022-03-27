import { createContext, useContext, useEffect, useState } from "react";
import { userContext } from "./UserProvider";
import axios from "axios";

export const stateContext = createContext();

const stateBuilder = (locations, foods) =>
  locations.map((location) => ({
    ...location,
    foods: foods.filter((food) => food.location_id === location.id),
  }));

export default function UserProvider(props) {
  const [state, setState] = useState(null);
  const user = useContext(userContext);

  useEffect(() => {
    Promise.all([
      axios.get(`http:localhost:3000/users/${user}/locations`),
      axios.get(`http:localhost:3000/users/${user}/foods`),
    ]).then((all) => {
      setState(stateBuilder(all[0], all[1]));
      console.log(state);
    });
  });

  // const incrementUser = () => setUser((prev) => (prev < 20 ? prev + 1 : prev));
  // const decrementUser = () => setUser((prev) => (prev > 1 ? prev - 1 : prev));

  const providerData = { state, setState };

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
}
