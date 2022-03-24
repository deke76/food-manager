import useFetchServer from "../hooks/useFetchServer"

const URL = {
  USERS: 'localhost:3000/users',
  FOODS: 'localhost:3000/foods',
  LOCATIONS: 'localhost:3000/locations',
  USER_FOODS: `localhost:3000/users/${user}/foods`,
  USER_LOCATIONS: `localhost:3000/users/${user}/locations`,
  LOCATION_FOODS: `localhost:3000/locations/${location}/foods`
}

export { useFetchServer, URL }
