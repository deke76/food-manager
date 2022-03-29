import {
  useContext, stateContext,
  Calendar, FoodList } from '../../../constants';

export default function FoodBrowse(props) {
  const { state } = useContext(stateContext);

  const selectedLocation = state
    ? state.locations.filter((loc) => loc.id === state.currentLocation)[0]
    : null;

  return selectedLocation ? (
    <div>
      {/* <div>{<Calendar />}</div> */}
      <div>{<FoodList foods={selectedLocation.foods} />}</div>
    </div>
  ) : (
    <div>Could not fetch data from location {state}</div>
  );
}
