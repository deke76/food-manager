import React from "react";
import FoodListItem from "./FoodListItem";


export default function FoodList(props) {

  // Setup the list using the array passed in
  const items = 
  props.data.map((d, index) => (
    <FoodListItem
      key={index}
      name={d.name}
      quantity={d.quantity}
      expires={d.date_expires}
      purchased={d.date_purchased}
      expired={Date.parse(d.date_expires) - Date.now() < 0 ? true : false}
    />
  ))
  console.log(
    );

  return (
    <ul>
      {items}
    </ul>
  )
}