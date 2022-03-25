import { createContext, useState } from "react";

export const locationContext = createContext();

export default function LocationProvider(props) {
  const [location, setLocation] = useState(1);

  const providerData = { location, setLocation };
  
  return (
    <locationContext.Provider value={providerData}>
      {props.children}
    </locationContext.Provider>
  );
}
