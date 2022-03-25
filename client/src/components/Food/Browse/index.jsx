import { useContext } from "react";
import useFetchServer from "../../../hooks/useFetchServer";
import { locationContext } from "../../../providers/LocationProvider";
import FoodList from "./List/FoodList";

export default function FoodBrowse(props) {
  const { location: locationId } = useContext(locationContext);
  console.log("locationId", locationId);
  const { responseData: foodItems } = useFetchServer(
    `/locations/${locationId}/foods`
  );
  console.log(foodItems);

  return (
    <div>
      {foodItems && <FoodList data={foodItems} />}
    </div>
  );
}
