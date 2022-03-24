export const url = function(id) {
  const url = '';
  USERS = 'localhost:3000/users';
  FOODS =  'localhost:3000/foods';
  LOCATIONS = 'localhost:3000/locations';
  USER_FOODS = `localhost:3000/users/${id}/foods`;
  USER_LOCATIONS = `localhost:3000/users/${id}/locations`;
  LOCATIONS_FOODS = `localhost:3000/locations/${id}/foods`;

  return url;
};