import axios from "axios";

export function getUserData(userId) {
  const url = `localhost:3000/users/${userId}`
  const objUser = {}
  
  console.log(url);

  axios
    .get(url)
    .then( response => console.log(response.foods))

  return objUser;
}