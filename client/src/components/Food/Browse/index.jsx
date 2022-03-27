import { useContext } from "react";
import useFetchServer from "../../../hooks/useFetchServer";
import { locationContext } from "../../../providers/LocationProvider";
import FoodList from "./List/FoodList";
import LocationList from "../../Locations/Browse/locationList"

export default function FoodBrowse(props) {
  const { locationID } = useContext(locationContext);
  const { responseData: foodItems } = useFetchServer(
    `locations/${locationID}/foods`
  );

  return (
    <div>
        <LocationList />
      <div>{foodItems && <FoodList data={foodItems} />}</div>
    </div>
  );
}
