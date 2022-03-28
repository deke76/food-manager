import React from 'react';
import Button from '../../../buttons/actions/Button';
import './location.scss';

export default function LocationListItem(props) {
  const { name, city, province, quantity } = props

  return (
    <tr className={'list-item'}>
      <td className={'list-item__button'}><Button icon = {'caret'}/></td>
      <td className={'list-item__name'}>{name}</td>
      <td className={'list-item__quantity'}>{quantity !== 0 && quantity}</td>
      <td className={'list-item__city'}>{city}, </td>
      <td className={'list-item__province'}>{province}</td>
    </tr>
  )
}