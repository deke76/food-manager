import React from 'react';
import FoodList from './FoodList';

export default {
  component: FoodList
};

const foods = [
  {name: 'Banana', quantity: 3, date_purchased: '2022-03-21', date_expires: '2022-03-28'},
  {name: 'Orange', quantity: 2, date_purchased: '2022-03-17', date_expires: '2022-03-30'},
  {name: 'Apple', quantity: 6, date_purchased: '2022-03-15', date_expires: '2022-03-31'}
]

export const Food_List = () => <FoodList data={foods} />;
