// import modules
import { useContext } from "react";

import { FoodList, stateContext } from "../../Constants";

export default function FoodBrowse(props) {
  const { state } = useContext(stateContext);

  const foods = state
    ? state.foods.filter((food) => food.location_id === state.currentLocation)
    : [];

  return foods ? (
    <div className="food-container">
      {/* <div>{<Calendar />}</div> */}
      <div>{<FoodList foods={foods} />}</div>
    </div>
  ) : (
    <div>Could not fetch data from location {state}</div>
  );
}
