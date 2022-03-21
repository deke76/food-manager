import moment from "moment";

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
    date: "2022-04-02",
    lifespan: 10,
  },
  {
    name: "Chicken",
    location: "House/Freezer",
    date: "2022-03-20",
    lifespan: 15,
  },
];

const filterEvents = (date, events) =>
  events.filter((e) => moment(e.date).isSame(moment(date), "day"));
