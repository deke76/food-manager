import React from 'react';
import Button from '../../../buttons/actions/Button';
import moment from 'moment';
import classNames from 'classnames';
import './foods.scss';

export default function FoodListItem(props) {
  const { food } = props

  const expired = moment().isAfter(moment(food.date_expires))
  const classes = classNames("list-item", {expired})
  
  const daysToExpiry = moment(food.date_expires).from(moment());


  return (
    <tr className={classes}>
      <td className={'list-item__name'}>{food.name}</td>
      <td className={'list-item__quantity'}>{food.quantity}</td>
      <td className={'list-item__units'}>{food.quantity_units}</td>
      <td className={'list-item__expiry'}>{ expired ? "expired" : "expires"} {daysToExpiry}</td>
    </tr>
  )
}