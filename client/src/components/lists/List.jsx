import React from "react";
import ListItem from "./ListItem";


export default function List(props) {

  // Setup the list using the array passed in
  const items = 
  props.data.map((d, index) => (
    <ListItem
      key={index}
      name={d.name}
      quantity={d.quantity}
      detailHeader={'Expires ' + d.date_expires}
      detailFooter={'Purchased ' + d.date_purchased}
    />
  ))
  console.log(items);

  return (
    <ul>
      {items}
    </ul>
  )
}