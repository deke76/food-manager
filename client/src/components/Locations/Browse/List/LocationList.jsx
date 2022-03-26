import React from "react";
import LocationListItem from "./LocationListItem";


export default function LocationList(props) {

  // Setup the list using the array passed in
  const showLocationFoods = function(user, location) {
    console.log('user', user, 'location', location)
  }

  const items = 
  props.data.map((d, index) => (
    <LocationListItem
      key={index}
      name={d.name}
      city={d.city}
      province={d.province}
      onClick={() => showLocationFoods(d.user_id, d.id)}
    />
  ))
  
  return (
    <table className={'list'}>
      <tbody>
        {items}
      </tbody>
    </table>
  )
}