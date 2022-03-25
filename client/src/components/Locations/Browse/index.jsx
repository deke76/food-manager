import { useFetchServer } from '../../../constants'
import LocationList from "./List/LocationList";

export default function LocationBrowse(props) {
  const { responseData: locations } = useFetchServer('/locations');
  console.log(locations);
  return (
    <div>
      {locations && <LocationList data={ locations } />}
    </div>
  );
}
