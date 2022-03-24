import Calendar from "./index";

export default {
  component: Calendar,
};

const events = [
  {
    name: "Bananas",
    location: "House/Pantry",
    date: "2022-03-16",
    lifespan: 20,
  },
  {
    name: "Bread",
    location: "House/Pantry",
    date: "2022-03-23",
    lifespan: 40,
  },
  {
    name: "Milk",
    location: "House/Fridge",
    date: "2022-03-25",
    lifespan: 10,
  },
  {
    name: "Chicken",
    location: "House/Freezer",
    date: "2022-03-25",
    lifespan: 15,
  },
];

// export const Default = () => <Calendar />;
export const WithItems = () => <Calendar events={events}/>;
export const WithoutItems = () => <Calendar events={[]}/>;
