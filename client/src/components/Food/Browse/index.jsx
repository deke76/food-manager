import {URL, useFetchServer } from "../../../constants";
import FoodList from "./List/FoodList";

export default function FoodBrowse(props) {
  const { responseData } = useFetchServer(URL.userFoods);
  const { foods } = responseData
  console.log(responseData);
  return (
    <div>
      <FoodList data={ foods } />
    </div>
  );
}
