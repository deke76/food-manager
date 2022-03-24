import React from 'react';
import LocationList from './LocationList';

export default {
  component: LocationList
};

const locations = [
  {name: 'Home', city: 'Calgary', province: 'AB'},
  {name: 'Lake', city: 'Sylvan', province: 'AB'},
  {name: 'Shed', city: 'Calgary', province: 'AB'}
]
console.log(locations);

export const Location_List = () => <LocationList data={locations} />;
