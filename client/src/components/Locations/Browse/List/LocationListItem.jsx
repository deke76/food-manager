import React from 'react';
import Button from '../../../buttons/actions/Button';
import './LocationListItem.scss';

export default function LocationListItem(props) {
  const { name, city, province, quantity } = props
  const empty = props;
  console.log(empty);
  return (
    <section className='list-item'>
      <div className='list-item__left'>
        <Button icon = {'caret'}/>
        <div>
          <h4>{name}</h4>
          <h6 className='list-item__left__quantity'>{quantity !== 0 && quantity}</h6>
        </div>
      </div>
      <div className='list-item__right'>
        <h5>{city}</h5>
        <h6>{province}</h6>
      </div>
    </section>
  )
}