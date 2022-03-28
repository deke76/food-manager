import { locations, foods } from "./stateExampleData";

const stateBuilder = (locations, foods) =>
  locations.map((location) => ({
    ...location,
    foods: foods.filter((food) => food.location_id === location.id),
  }));

console.log(JSON.stringify(stateBuilder(locations,foods)))