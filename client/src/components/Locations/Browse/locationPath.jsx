import { useContext, useEffect, useState } from "react";
import { useFetchServer } from "../../../constants";
import { locationContext } from "../../../providers/LocationProvider";
import LocationCardList from "./locationCardList";

const filterLocations = (id, locations) =>
  locations.filter((loc) => loc.id === id)[0];

export default function LocationPath(props) {
  const { locationID, setLocationID } = useContext(locationContext);
  console.log("locationID", locationID);

  const { responseData: locations } = useFetchServer(`locations`);

  return (
    <div className="location-path">
      Location:{" "}
      {/* {locations && locationID && filterLocations(locationID, locations).name} */}
      {locations && <LocationCardList locations={locations} />}
    </div>
  );
}
