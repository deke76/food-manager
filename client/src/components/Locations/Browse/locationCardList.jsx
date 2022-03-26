import LocationCard from "./locationCard";
import "./locationCardList.scss"

export default function LocationCardList(props) {
  const { locations } = props;
  return (
    <div className="sideways-scrolling-wrapper">
      {locations.map((location) => (
        <LocationCard location={location} />
      ))}
    </div>
  );
}
