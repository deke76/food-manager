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
  
  const ingredients = foodItems ? foodItems.map( item => item.name ) : [];
  
  const ingredientsUrl = `http://localhost:3000/recipes?ingredients=${ingredients}`
  // const recipes = axios
  //     .get(url)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err));
  

  // Build the cards
  const recipeItems = 
    recipes.map(recipe => 
      <RecipeCard
        key={recipe.id}
        name={recipe.title}
        picture={recipe.image}
        onClick={() => window.location.assign('http://google.ca')}
      />);

  return (
    <div className='recipe-list'>
      {recipeItems}
    </div>
  )
}