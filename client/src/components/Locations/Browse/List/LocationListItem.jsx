import React from 'react';
import Button from '../../../buttons/actions/Button';
import './location.scss';
import { Link } from 'react-router-dom';

export default function LocationListItem(props) {
  const { name, city, province, quantity, onClick } = props

  return (
    <tr className={'list-item'} onClick={onClick}>
      {/* <Link> */}
      <td className={'list-item__button'}><Button icon = {'caret'}/></td>
      <td className={'list-item__name'}>{name}</td>
      <td className={'list-item__quantity'}>{quantity !== 0 && quantity}</td>
      <td className={'list-item__city'}>{city}, </td>
      <td className={'list-item__province'}>{province}</td>
      {/* </Link> */}
    </tr>
  )
}