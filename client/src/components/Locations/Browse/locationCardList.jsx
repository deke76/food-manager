import LocationCard from "./locationCard";
import LocationCardNew from "./locationCardNew"

import "./locationCardList.scss"

export default function LocationCardList(props) {
  const { locations } = props;
  return (
    <div className="sideways-scrolling-wrapper">
      {locations.map((location) => (
        <LocationCard location={location} />
      ))}
      <LocationCardNew />
    </div>
  );
}
