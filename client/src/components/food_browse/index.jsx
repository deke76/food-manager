import useFetchServer from "../../hooks/useFetchServer";
import FoodList from "./list";
import UserProvider from "../../providers/UserProvider";

export default function FoodBrowse(props) {
  const { responseData } = useFetchServer();

  return (
    <div>
      <UserProvider>
        <FoodList items={responseData.foods} />
      </UserProvider>
    </div>
  );
}
