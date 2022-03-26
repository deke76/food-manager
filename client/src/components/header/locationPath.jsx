import { useContext } from "react";
import { useFetchServer } from "../../constants";
import { locationContext } from "../../providers/LocationProvider";

export default function LocationPath(props) {
  const {locationID} = useContext(locationContext)
  const {responseData: location} = useFetchServer(`locations/${locationID}`);
  console.log("location",location)

  return (
    <div className="location-path">
      Location: {location && location.name}
    </div>
  );
}
