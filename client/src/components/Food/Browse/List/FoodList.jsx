import moment from "moment";
import React from "react";
import FoodListItem from "./FoodListItem";

export default function FoodList(props) {
  const { foods } = props;

  // Setup the list using the array passed in
  foods && foods.sort((a, b) => moment(a.date_expires) - moment(b.date_expires));

  return (
    <table className={"list"}>
      <tbody>
        {foods && foods.map((food, index) => <FoodListItem key={index} food={food} />)}
      </tbody>
    </table>
  );
}
