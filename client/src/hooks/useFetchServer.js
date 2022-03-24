import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../providers/UserProvider";

export default function useFetchServer(route) {
  const [responseData, setResponseData] = useState(null);
  const [responseError, setReponseError] = useState(null);
  const { user } = useContext(userContext);
  console.log("user",user);
  console.log('route',route);

  useEffect(() => {
    const url = `http://localhost:3000/users/${user}/${route}`;
    console.log("url",url)
    return axios
      .get(url)
      .then((res) => setResponseData(res.data))
      .catch((err) => setReponseError(err));
  },[route, user]);

  if (responseError) console.log(responseError)
  return { responseData, responseError };
}
