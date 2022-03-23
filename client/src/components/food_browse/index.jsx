import useFetchServer from "../../hooks/useFetchServer";
import FoodList from "./list";

export default function FoodBrowse(props) {
  const { responseData } = useFetchServer("foods");
  
  return (
    <div>
      <h2>Hello from FoodBrowse</h2>
      <FoodList items={responseData} />
    </div>
  );
}
