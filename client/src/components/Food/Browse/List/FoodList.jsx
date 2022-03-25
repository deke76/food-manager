import moment from "moment";
import React from "react";
import FoodListItem from "./FoodListItem";


export default function FoodList(props) {

  // Setup the list using the array passed in
  props.data.sort((a, b) =>
    moment(a.date_expires) - moment(b.date_expires));
  const items = 
  props.data.map((d, index) => (
    <FoodListItem
      key={index}
      name={d.name}
      quantity={d.quantity}
      units={d.quantity_units}
      expires={d.date_expires}
      purchased={d.date_purchased}
      expired={Date.parse(d.date_expires) - Date.now() < 0 ? true : false}
    />
  ))

  return (
    <ul>
      <table>
        <tbody>
          {items}
        </tbody>
      </table>
    </ul>
  )
}