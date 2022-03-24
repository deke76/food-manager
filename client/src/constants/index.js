import useFetchServer from "../hooks/useFetchServer"

const URL = {
  USERS: 'localhost:3000/users',
  FOODS:  'localhost:3000/foods',
  LOCATIONS: 'localhost:3000/locations',
  userFoods: function(id) {
    return `localhost:3000/users/${id}/foods`;
  },
  userLocations: function(id) {
    return `localhost:3000/users/${id}/locations`;
  },
  locationsFoods: function(id) {
    return `localhost:3000/locations/${id}/foods`;
  },
}

export { useFetchServer, URL }
