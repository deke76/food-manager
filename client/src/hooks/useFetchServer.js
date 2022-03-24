import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../providers/UserProvider";

export default function useFetchServer() {
  const [responseData, setResponseData] = useState([]);
  const [responseError, setReponseError] = useState(null);
  const { user } = useContext(userContext);

  useEffect(() => {
    const url = `http://localhost:3000/users/${user}`;
    axios
      .get(url)
      .then((res) => setResponseData(res.data))
      .catch((err) => setReponseError(err));
  }, [user]);
  console.log(responseData)
  if (responseError) console.log(responseError)
  return { responseData, responseError };
}
