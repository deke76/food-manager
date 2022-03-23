import useFetchServer from "../../hooks/useFetchServer";
import FoodList from "./list";
import UserProvider from "../../providers/UserProvider";
import LocationSelect from "../buttons/locationSelect";
import { useState } from "react";

export default function FoodBrowse(props) {
  const [currentLocation, setCurrentLocation] = useState(null); // [0,1]
  const { responseData } = useFetchServer("foods");

  return (
    <div>
      <UserProvider>
        <LocationSelect
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
        <FoodList items={responseData} />
      </UserProvider>
    </div>
  );
}
