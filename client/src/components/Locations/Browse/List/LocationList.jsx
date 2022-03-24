import React from "react";
import LocationListItem from "./LocationListItem";


export default function LocationList(props) {

  // Setup the list using the array passed in
  const items = 
  props.data.map((d, index) => (
   <LocationListItem
     key={index}
     name={d.name}
     detailHeader={d.city}
     detailFooter={d.province}
   />
  ))
  console.log(props.data);

  return (
    <ul>
      {items}
    </ul>
  )
}