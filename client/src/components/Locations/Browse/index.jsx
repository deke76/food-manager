import { useFetchServer } from '../../../constants'
import LocationPath from '../../header/locationPath';
import LocationList from "./List/LocationList";

export default function LocationBrowse(props) {
  const { responseData: locations } = useFetchServer('/locations');
  // console.log(locations);
  return (
    <div>
      <LocationPath />
      {locations && <LocationList data={ locations } />}
    </div>
  );
}
