import { createContext, useState } from "react";

export const userContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState(2);

  const incrementUser = () => setUser((prev) => prev < 50 ? prev + 1 : prev);
  const decrementUser = () => setUser((prev) => prev > 0 ? prev - 1 : prev);

  const providerData = { user, incrementUser, decrementUser };
  
  return (
    <userContext.Provider value={providerData}>
      {props.children}
    </userContext.Provider>
  );
}
