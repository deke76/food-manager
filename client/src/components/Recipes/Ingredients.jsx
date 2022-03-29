import React from "react";

export default function Ingredients(props) {
  const { ingredient } = props;
  const amount = ingredient.amount < 1.00
                ? ingredient.amount.toFixed(2)
                : ingredient.amount;
  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{amount}</td>
      <td>{ingredient.unitLong}</td>
    </tr>
  )
};