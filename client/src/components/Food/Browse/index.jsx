import { useContext } from "react";
import useFetchServer from "../../../hooks/useFetchServer";
import { locationContext } from "../../../providers/LocationProvider";
import FoodList from "./List/FoodList";
import Calendar from "./Calendar";

export default function FoodBrowse(props) {
  const { locationID } = useContext(locationContext);
  const { responseData: foodItems } = useFetchServer(
    `locations/${locationID}/foods`
  );

  return (
    <div>
      <div>{foodItems && <Calendar />}</div>
      <div>{foodItems && <FoodList foods={foodItems} />}</div>
    </div>
  );
}
