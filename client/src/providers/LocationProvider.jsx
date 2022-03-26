import { createContext, useState } from "react";

export const locationContext = createContext();

export default function LocationProvider(props) {
  const [locationID, setLocationID] = useState(1);

  const providerData = { locationID, setLocationID };
  
  return (
    <locationContext.Provider value={providerData}>
      {props.children}
    </locationContext.Provider>
  );
}
