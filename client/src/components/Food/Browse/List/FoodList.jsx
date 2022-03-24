import React from "react";
import FoodListItem from "./FoodListItem";


export default function List(props) {

  // Setup the list using the array passed in
  const items = 
  props.data.map((d, index) => (
   <FoodListItem
     key={index}
     name={d.name}
     quantity={d.quantity}
     detailHeader={'Expires ' + d.date_expires}
     detailFooter={'Purchased ' + d.date_purchased}
   />
  ))
  console.log(props.data);

  return (
    <ul>
      {items}
    </ul>
  )
}