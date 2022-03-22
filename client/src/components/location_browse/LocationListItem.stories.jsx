import "../../index.scss";
import { action } from "@storybook/addon-actions";
import LocationListItem from "./LocationListItem";

export default {
  title: "Locations/Location Item",
  component: LocationListItem,
};

const children = [
  { id: 5, name: "Pantry", children: [] },
  { id: 6, name: "Fridge", children: [] },
  { id: 7, name: "Freezer", children: [] },
];

export const NoChildren = () => (
  <LocationListItem
    id={0}
    name="Cabin"
    children={[]}
    addItem={() => action("add")}
  />
);

export const WithChildren = () => (
  <LocationListItem
    id={0}
    name="Cabin"
    children={children}
    addItem={() => action("add")}
  />
);
