import { React, axios } from "../../constants";
import { useContext, useState, useEffect, stateContext } from "../../constants";
import { RecipeCard } from "../../constants";


export default function RecipeBrowse(props) {
  const [recipes, setRecipes] = useState([]);
  const { state } = useContext(stateContext);

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
  }, [state]);

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
