import { useContext } from "react";
import FoodList from "./List/FoodList";
import Calendar from "./Calendar";
import { stateContext } from "../../../providers/StateProvider";

export default function FoodBrowse(props) {
  const { state } = useContext(stateContext);
  
  const selectedLocation = state
  ? state.locations.filter((loc) => loc.id === state.currentLocation)[0]
  : null;

  return selectedLocation ? (
    <div>
      <div>{<Calendar />}</div>
      <div>{<FoodList foods={selectedLocation.foods} />}</div>
    </div>
  ) : <div>Could not fetch data</div>;
}
