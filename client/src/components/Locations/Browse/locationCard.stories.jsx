import LocationCard from "./locationCard";

export default {
  component: LocationCard,
};

const location = {
  id: 2,
  user_id: 1,
  name: "Basement - Cooler",
  street_address: "9950 Weber Divide",
  postal: "38821-0331",
  province: "IL",
  city: "South Lindsay",
  country: "Greenland",
  created_at: "2022-03-26T05:17:25.329Z",
  updated_at: "2022-03-26T05:17:25.329Z",
  parent_id: null,
  num_children: 7,
};

export const Default = () => <LocationCard location={location} />;
