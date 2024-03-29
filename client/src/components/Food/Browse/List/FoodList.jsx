import moment from "moment";
import FoodListItem from "./FoodListItem";

import "./FoodList.scss";

export default function FoodList(props) {
  const { foods } = props;

  // Setup the list using the array passed in
  foods.sort((a, b) => moment(a.date_expires) - moment(b.date_expires));

  return (
    <div className="food-list">
      {foods.map((food, index) => (
        <FoodListItem key={food.id} food={food} />
      ))}
    </div>
  );
}
