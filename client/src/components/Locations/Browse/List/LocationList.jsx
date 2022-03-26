import React, { useContext } from "react";
import { locationContext } from '../../../../providers/LocationProvider'
import LocationListCard from "./LocationListCard";
import './location.scss'

export default function LocationList(props) {

  const { setLocation } = useContext(locationContext);
  // Setup the list using the array passed in
  const showLocationFoods = function( user, location) {
    console.log('user', user, 'location', location)
    setLocation(location);
  }
  const items = 
  props.data.map((d, index) => (
   <LocationListCard
     key={index}
     name={d.name}
     city={d.city}
     province={d.province}
     onClick={() => showLocationFoods(d.user_id, d.id)}
   />
  ))
  
  return (
    <div className={'scrolling-wrapper'}>
      {items}
    </div>
  )
}