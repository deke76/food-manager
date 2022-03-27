import { React, moment, Button } from '../../../../constants';
import './foods.scss';

export default function FoodListItem(props) {
  const { name, expires, quantity, units, expired } = props
  let sectionClass = 'list-item' + (expired ? ' expired' : '');
  
  const today = new Date();
  const daysToExpiry = moment(expires).from(today);

  return (
    <tr className={sectionClass}>
      <td className={'list-item__button'}><Button icon = { 'caret' }/></td>
      <td className={'list-item__name'}>{name}</td>
      <td className={'list-item__quantity'}>{quantity}</td>
      <td className={'list-item__units'}>{units}</td>
      <td className={'list-item__expiry'}>{daysToExpiry}</td>
    </tr>
  )
}