import { moment, React, FoodListItem } from "../../../../constants";

export default function FoodList(props) {
  const { foods } = props;

  // Setup the list using the array passed in
  foods.filter(food => food.quantity > 0)
  foods.sort((a, b) => moment(a.date_expires) - moment(b.date_expires));

  return (
    <table className={"list"}>
      <tbody>
        {foods.map((food, index) => (
          <FoodListItem key={index} food={food} />
        ))}
      </tbody>
    </table>
  );
}
