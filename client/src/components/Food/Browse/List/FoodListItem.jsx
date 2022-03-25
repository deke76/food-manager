import React from 'react';
import Button from '../../../buttons/actions/Button';
import moment from 'moment';
import './FoodListItem.scss';

export default function FoodListItem(props) {
  const { name, expires, quantity, units, expired } = props
  let sectionClass = 'list-item' + (expired ? ' expired' : '');
  
  const today = new Date();
  const daysToExpiry = moment(expires).from(today);

  return (
    <tr className={sectionClass}>
      <td><Button icon = { 'caret' }/></td>
      <td className={'list-item__name'}>{name}</td>
      <td>{quantity}</td>
      <td>{units}</td>
      <td>{daysToExpiry}</td>
    </tr>
  )
}