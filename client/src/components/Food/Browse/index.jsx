import { useContext } from "react";
import useFetchServer from "../../../hooks/useFetchServer";
import { locationContext } from "../../../providers/LocationProvider";

export default function FoodBrowse(props) {
  const { location: locationId } = useContext(locationContext);
  console.log("locationId", locationId);
  const { responseData: foodItems } = useFetchServer(
    `/locations/${locationId}/foods`
  );
  console.log(foodItems);

  return (
    <div>
      {foodItems && foodItems.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}
