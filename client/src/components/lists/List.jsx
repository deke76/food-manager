import React from "react";
import ListItem from "./ListItem";

export default function List(props) {

  // Setup the list using the array passed in
  const items = 
    props.data.map(d => 
      <ListItem
        name={d.name}
        quantity={d.quantity}
        detailHeader={'Expires' + d.date_expires}
        detailFooter={'Purchased ' + d.date_purchased}
      />)
  return (
    <ul>
      { items }
    </ul>
  )
}