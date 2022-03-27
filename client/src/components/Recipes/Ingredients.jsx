import React from "react";

export default function Ingredients(props) {
  const { ingredient } = props;
  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{ingredient.amount}</td>
      <td>{ingredient.unitLong}</td>
    </tr>
  )
};