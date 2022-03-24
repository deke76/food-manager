import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../providers/UserProvider";

export default function useFetchServer(url) {
  const [responseData, setResponseData] = useState(null);
  const [responseError, setReponseError] = useState(null);
  const { user } = useContext(userContext);

  useEffect(() => {
    return axios
      .get(url)
      .then((res) => setResponseData(res.data))
      .catch((err) => setReponseError(err));
  },[route, user]);

  if (responseError) console.log(responseError)
  return { responseData, responseError };
}
