import React from "react";
import { useContext } from "react";
import { locationContext } from "../../providers/LocationProvider";
import axios from "axios";
import useFetchServer from "../../hooks/useFetchServer";
import RecipeCard from './RecipeCard'

import { recipes } from "./testData";

export default function RecipeBrowse(props) {
  const { locationID } = useContext(locationContext);
  const { responseData: foodItems } = useFetchServer(
    `locations/${locationID}/foods`
  );
  
  const ingredients = foodItems ? foodItems.map( item => item.name ).join(',+') : [];
  const url = `http://localhost:3000/recipes?ingredients=${ingredients}`
    
  // const recipes = axios
  //     .get(url)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  
  // Build the cards

  const recipeItems = recipes.length 
    ? recipes.map(recipe => 
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        onClick={() => window.location.assign(`http://spoonacular.com/recipes/${recipe.title}-${recipe.id}`)}
      />)
    : [];

  return (
    <div className='recipe-wrapper'>
      {recipeItems}
    </div>
  )
}