import { URL, useFetchServer } from '../../../constants'
import LocationList from "./List/LocationList";

export default function LocationBrowse(props) {
  const { responseData } = useFetchServer(URL.USER_LOCATIONS);
  const { locations } = responseData
  console.log(responseData);
  return (
    <div>
      <LocationList data={ locations } />
    </div>
  );
}
