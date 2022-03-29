import FoodList from "./List/FoodList";
import { stateContext } from "../../../providers/StateProvider";
import { useContext } from "react";

export default function FoodBrowse(props) {
  const { state } = useContext(stateContext);

  const selectedLocation = state
    ? state.locations.filter((loc) => loc.id === state.currentLocation)[0]
    : null;

  const foods = state ? state.foods.filter(food => food.location_id === selectedLocation.id) : []
  
  return selectedLocation ? (
    <div className='food-container'>
      {/* <div>{<Calendar />}</div> */}
      <div>{<FoodList foods={foods} />}</div>
    </div>
  ) : (
    <div>Could not fetch data</div>
  );
}
