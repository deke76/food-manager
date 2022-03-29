import { useState, useContext, useEffect } from "react";
import { stateContext } from "./../../providers/StateProvider";
import axios from "axios";

import RecipeCard from "./RecipeCard"


// import { recipes } from "./testData";

export default function RecipeBrowse(props) {
  const[recipes, setRecipes] = useState([])
  const { locationID } = useContext(locationContext);
  const { responseData: foodItems } = useFetchServer(
    `locations/${locationID}/foods`
  );
  
  const ingredients = foodItems ? foodItems.map( item => item.name ).join(',+') : [];
  
  useEffect(() => {
    const selectedLocation = state
      ? state.locations.filter((loc) => loc.id === state.currentLocation)[0]
      : null;

    const ingredients = selectedLocation
      ? selectedLocation.foods.map((item) => item.name).join(",+")
      : [];

    const url = `http://localhost:3000/recipes?ingredients=${ingredients}`;

    return axios
      .get(url)
      .then((response) => setRecipes(response.data))
      .catch(console.log("No recipes available"));
  }, [ingredients]);
    
  console.log(recipes.length);
  // Build the cards
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
