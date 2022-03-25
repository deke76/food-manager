import { useContext } from "react";
import useFetchServer from "../../../hooks/useFetchServer";
import { locationContext } from "../../../providers/LocationProvider";
import FoodList from "./List/FoodList";

export default function FoodBrowse(props) {
  const { location: locationId } = useContext(locationContext);
  const { responseData: foodItems } = useFetchServer(
    `/locations/${locationId}/foods`
  );
  
  return (
    <div>
      {foodItems && <FoodList data={foodItems} />}
    </div>
  );
}
