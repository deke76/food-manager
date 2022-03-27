import { useContext, useFetchServer, locationContext, Calendar, FoodList } from "../../../constants";

export default function FoodBrowse(props) {
  const { locationID } = useContext(locationContext);
  const { responseData: foodItems } = useFetchServer(
    `locations/${locationID}/foods`
  );

  return (
    <div>
      <div>{foodItems && <Calendar />}</div>
      <div>{foodItems && <FoodList data={foodItems} />}</div>
    </div>
  );
}
