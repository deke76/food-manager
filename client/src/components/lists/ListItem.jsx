import React from 'react';
import Button from '../buttons/Button';
import './locations.scss';

export default function ListItem(props) {
  const { empty, name, city, province } = props
  
  return (
    <section className='container'>
      <Button icon = { !empty ? 'caret' : 'plus' }/>
      <h4>{name}</h4>
      <div>
        <h4>{city}</h4>
        <h6>{province}</h6>
      </div>
    </section>
  )
}