import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classNames from 'classnames';
import './location.scss';

export default function LocationListCard(props) {
  const { name, city, province, quantity, onClick } = props
  const cardClasses = classNames('location-card')
  return (
    <div className={cardClasses} onClick={onClick}>
      <header>
        <h4 className={'location-card__title'}>{name}</h4>
        <div className={'location-card__quantity'}>{quantity !== 0 && quantity}</div>
      </header>
      <article className='location-card__details'>
        <div>{city}</div>
        <div>{province}</div>
      </article>
      <div className='location-card__delete'>
      <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>  
  )
}