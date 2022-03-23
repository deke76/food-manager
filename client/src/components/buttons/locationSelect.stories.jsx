import { useState } from "react";
import LocationSelect from "./locationSelect";

export default { component: LocationSelect };

export const Default = () => {
  const [location, setLocation] = useState(null);
  return (
    <LocationSelect
      currentLocation={location}
      setCurrentLocation={setLocation}
    />
  );
};
