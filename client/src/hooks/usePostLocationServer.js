import axios from "axios";
import { useContext, useEffect } from "react";
import { userContext } from "../providers/UserProvider";

export default function usePostLocationServer(data) {
  const { user } = useContext(userContext);

  const url = `http://localhost:3000/users/${user}/locations`;
  return axios.post(url, data);
}
