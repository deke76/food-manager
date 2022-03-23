import { useState } from "react";
import useFetchServer from "../../hooks/useFetchServer";

export default function LocationSelect(props) {
  const { currentLocation, setCurrentLocation } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  const { responseData } = useFetchServer("shelves");
  const shelves = responseData;

  return (
    <div className="dropdown">
      <nav className="location-path" onClick={() => setShowDropdown((prev) => !prev)}>
        Location: House/Pantry
      </nav>
      {showDropdown && (
        <ul className="location-dropdown">
          <li>House/Fridge</li>
          <li>House/Freezer</li>
          <li>Cabin/Freezer 1</li>
          <li>Cabin/Freezer 2</li>
        </ul>
      )}
    </div>
  );
}
