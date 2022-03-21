import "./LocationList.scss";
import LocationListItem from "./LocationListItem";
import { generateLocationTree } from "../../helpers/locationTreeHelpers";

export default function LocationList(props) {
  const { locations } = props;
  const locationTree = generateLocationTree(locations);

  return (
    <div className="location-list">
      {locationTree.map((location, index) => (
        <LocationListItem key={index} {...location} />
      ))}
    </div>
  );
}
