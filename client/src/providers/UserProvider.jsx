import { createContext, useState } from "react";

export const userContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState(0);

  const providerData = { user, setUser };

  return (
    <userContext.Provider value={providerData}>
      {props.children}{" "}
    </userContext.Provider>
  );
}
