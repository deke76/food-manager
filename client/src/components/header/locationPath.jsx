export default function LocationPath(props) {
  
  
  return (
    <div className="location-path" onClick={toggleLocationDropdown}>
      {location && location.name}
    </div>
  );
}
