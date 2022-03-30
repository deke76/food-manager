import { useState, useContext, useEffect } from "react";
import { stateContext } from "./../../providers/StateProvider";
import axios from "axios";

import RecipeCard from "./RecipeCard"
import { recipesTest } from './testData'

export default function RecipeBrowse(props) {
  const [recipes, setRecipes] = useState([]);
  const { state } = useContext(stateContext);

  // console.log(state);
  const ingredients = state
    ? state.foods
        .filter(food => food.location_id === state.currentLocation)
        .map(food => food.name)
    : [] ;

  useEffect(() => {
    const url = `http://localhost:3000/recipes?ingredients=${ingredients.join(',+')}`;
    console.log('Axios GET request - to Rails API (Spoonacular)');
    axios
    .get(url)
    .then((response) => {
      if (response.data.code === 402) {
        setRecipes(recipesTest)
      }
      else setRecipes(response.data);
    })
    .catch((error) => {
      console.log("error fetching from API",error);
      setRecipes(recipesTest);
    });
  }, []);
      
  // Build the cards
  recipes.sort((a, b) => a.missedIngredientCount - b.missedIngredientCount);
  const recipeItems = recipes.length
    ? recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() =>
            window.location.assign(
              `http://spoonacular.com/recipes/${recipe.title}-${recipe.id}`
            )
          }
        />
      ))
    : [];

  return <div className="recipe-wrapper">{recipeItems}</div>;
}
