import { axios, useContext, useEffect, useState, userContext } from "../constants";

export default function useFetchServer(route) {
  const [responseData, setResponseData] = useState(null);
  const [responseError, setReponseError] = useState(null);
  const { user } = useContext(userContext);

  useEffect(() => {
    const url = `http://localhost:3000/users/${user}/${route}`;
    return axios
      .get(url)
      .then((res) => setResponseData(res.data))
      .catch((err) => setReponseError(err));
  },[route, user]);

  if (responseError) console.log(responseError)
  return { responseData, responseError };
}
