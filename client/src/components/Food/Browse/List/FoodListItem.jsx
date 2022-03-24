import React from 'react';
import Button from '../../../buttons/actions/Button';
import './FoodListItem.scss';

export default function FoodListItem(props) {
  const { name, expires, purchased, quantity, expired } = props
  let sectionClass = 'list-item' + (expired ? ' expired' : '');

  return (
    <section className={sectionClass}>
      <Button icon = { 'caret' }/>
      <div className='list-item__description'>
        <h3>{name}</h3>
        <h4 className='list-item__left__quantity'>{quantity !== 0 && quantity + ' on hand'}</h4>
      </div>
    <div className='list-item__right'>
      <h4>Expires {expires}</h4>
    </div>
    </section>
  )
}