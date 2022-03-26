import { createContext, useState } from "react";

export const userContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState(1);

  // const incrementUser = () => setUser((prev) => (prev < 20 ? prev + 1 : prev));
  // const decrementUser = () => setUser((prev) => (prev > 1 ? prev - 1 : prev));

  const providerData = { user, setUser };

  return (
    <userContext.Provider value={providerData}>
      {props.children}
    </userContext.Provider>
  );
}
