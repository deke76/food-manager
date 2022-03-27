import { React, recipes, useFetchServer, useContext, locationContext, RecipeCard } from "../../constants";

export default function RecipeBrowse(props) {
  const { locationID } = useContext(locationContext);
  const { responseData: foodItems } = useFetchServer(
    `locations/${locationID}/foods`
  );
  
  const ingredients = foodItems ? foodItems.map( item => item.name ) : [];
  
  // const ingredientsUrl = `http://localhost:3000/recipes?ingredients=${ingredients}`
  // const recipes = axios
  //     .get(url)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err));
  
  // Build the cards
  const recipeItems = 
    ingredients.map(recipe => 
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        onClick={() => window.location.assign(`http://spoonacular.com/recipes/${recipe.title}-${recipe.id}`)}
      />);

  return (
    <div className='recipe-wrapper'>
      {recipeItems}
    </div>
  )
}