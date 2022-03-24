import useFetchServer from "../../../hooks/useFetchServer";
import LocationList from "./List/FoodList";

export default function LocationBrowse(props) {
  const { responseData } = useFetchServer('foods');
  const { foods } = responseData
  console.log(responseData);
  return (
    <div>
      <LocationList data={ foods } />
    </div>
  );
}
