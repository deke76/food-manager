import React from "react";

export default function UsedIngredients(props) {
  const { ingredient } = props;

  return (
    <div>
      <div className='used-ingredient__card'>
        {ingredient.name}
      </div>
    </div>
  )
};