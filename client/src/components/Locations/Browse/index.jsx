import useFetchServer from "../../../hooks/useFetchServer";
import LocationList from "./List/LocationList";

export default function LocationBrowse(props) {
  const { responseData } = useFetchServer('locations');
  const { locations } = responseData
  console.log(responseData);
  return (
    <div>
      <LocationList data={ locations } />
    </div>
  );
}
