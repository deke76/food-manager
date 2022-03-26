import { useContext } from "react";
import { useFetchServer } from "../../constants";
import { locationContext } from "../../providers/LocationProvider";

export default function LocationPath(props) {
  const {locationID} = useContext(locationContext)
  const locationName = useFetchServer(`locations/${locationID}`).name;

  return (
    <div className="location-path">
      {locationName && locationName}
    </div>
  );
}
