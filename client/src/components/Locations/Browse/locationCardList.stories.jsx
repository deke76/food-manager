import LocationCardList from "./locationCardList";

const locations = [
  {
    id: 1,
    user_id: 1,
    name: "Cabin - Fridge",
    street_address: "29676 Tammara Grove",
    postal: "40241-7474",
    province: "NM",
    city: "Dwaynestad",
    country: "Congo",
    created_at: "2022-03-26T05:17:25.299Z",
    updated_at: "2022-03-26T05:17:25.299Z",
    parent_id: null,
  },
  {
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
  },
  {
    id: 3,
    user_id: 1,
    name: "Apartment - Pantry",
    street_address: "50659 Champlin Pike",
    postal: "90303-8796",
    province: "IA",
    city: "West Val",
    country: "Turkmenistan",
    created_at: "2022-03-26T05:17:25.392Z",
    updated_at: "2022-03-26T05:17:25.392Z",
    parent_id: null,
  },
];

export default { component: LocationCardList };
export const Default = () => <LocationCardList locations={locations} />;
