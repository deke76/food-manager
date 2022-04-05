import React from "react";

export default function Ingredients(props) {
  const { ingredient } = props;
  const amount = ingredient.amount < 1.00
                ? ingredient.amount.toFixed(2)
                : ingredient.amount;
  const unit = ingredient.unitLong === '' ? 'ea' : ingredient.unitLong;

  return (
    <tr>
      <td className='name'>{ingredient.name}</td>
      <td className='amount'>{amount}</td>
      <td className='units'> {unit}</td>
    </tr>
  )
};