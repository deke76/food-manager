import { useState, useContext, useEffect } from "react";
import { stateContext } from "./../../providers/StateProvider";
import axios from "axios";

import RecipeCard from "./RecipeCard"
import { recipesTest } from './testData'

export default function RecipeBrowse(props) {
  const [recipes, setRecipes] = useState([]);
  const { state } = useContext(stateContext);

  useEffect(() => {
    const ingredients = (state !== null)
      ? state.foods.filter( food => food.location_id === state.currentLocation)
      : [] ;

    const url = `http://localhost:3000/recipes?ingredients=${ingredients}`;

    return axios
      .get(url)
      .then((response) => setRecipes(response.data))
      .catch(console.log("No recipes available"));
  }, [state]);

  // recipes.sort((a, b) => a.missedIngredientCount - b.missedIngredientCount);
  recipesTest.sort((a, b) => a.missedIngredientCount - b.missedIngredientCount);

  // Build the cards
  const recipeItems = recipesTest.length
    ? recipesTest.map((recipe) => (
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
