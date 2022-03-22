import CalendarItem from "./CalendarItem";

export default {
  component: CalendarItem,
};

export const Fresh = () => (
  <CalendarItem
    name="Bananas"
    location="House/Pantry"
    date="2022-05-23"
    lifespan={10}
  />
);
export const Iffy = () => (
  <CalendarItem
    name="Bananas"
    location="House/Pantry"
    date="2022-03-20"
    lifespan={10}
  />
);
export const Expired = () => (
  <CalendarItem
    name="Bananas"
    location="House/Pantry"
    date="2022-01-23"
    lifespan={10}
  />
);
