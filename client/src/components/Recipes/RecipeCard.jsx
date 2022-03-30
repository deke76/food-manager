import { useContext } from "react";
import { stateContext } from "./../../providers/StateProvider";
import Ingredients from "./Ingredients";
import Button from "../buttons/actions/Button";
import "./RecipeCard.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function RecipeCard(props) {
  const { recipe} = props;
  const { state } = useContext(stateContext);

  const recipeMailer = function (ingredients) {
    const id = state.locations[0].user_id;

    // // build the shopping list
    const ingredientName = ingredients.map((ingredient) => ingredient.name);
    const ingredientAmount = ingredients.map((ingredient) => ingredient.amount);
    const ingredientUnits = ingredients.map(
      (ingredient) => ingredient.unitShort
    );
    const shoppingList = [];

    for (let i = 1; i <= ingredientName.length; i++) {
      shoppingList.push(`ingredient${i}=${ingredientName[i - 1]}`);
      shoppingList.push(`amount${i}=${ingredientAmount[i - 1]}`);
      shoppingList.push(`units${i}=${ingredientUnits[i - 1]}`);
    }

    // console.log(shoppingList.join('&'));
    // send the missing ingredients to the server
    const url = `http://localhost:3000/recipes/email?id=${id}&ingredients=${shoppingList}`;
    // console.log(url);
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((res) =>
        console.log(
          "You're email isn't in our database, please check your information."
        )
      );
  };

  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(recipe.likes);

  useEffect(() => {
    liked && setNumLikes(recipe.likes + 1)
    !liked && setNumLikes(recipe.likes)
  },[liked, recipe.likes])

  // build the missing ingredients list
  const ingredients = recipe.missedIngredients.map((ingredient) => (
    <Ingredients key={ingredient.id} ingredient={ingredient} />
  ));

  return (
    <a
      href={`http://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
      target="_blank"
      rel="noreferrer"
      className={"recipe-card"}
    >
      <img src={recipe.image} className="recipe-card__img" alt="" />
      <div className="recipe-card__details">
        <header>
          <h1 className="recipe-card__title">{recipe.title}</h1>
          <p>{recipe.description}</p>
        </header>
        <article className="recipe-card__missing-ingredients">
          <h3>Missing Ingredients</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>{ingredients}</tbody>
          </table>
        </article>

        <article className="recipe-card__feedback">
          <Button
            icon="email"
            onClick={() => recipeMailer(recipe.missedIngredients)}
          />
          {/* <Button icon="check" text="I made this!" /> */}
          <Button
            icon="heart"
            className={liked ? "red" : ""}
            onClick={(event) => {
              event.preventDefault()
              setLiked((prev) => !prev)
              console.log("liked")
            }}
          />
          <h3>{numLikes} likes!</h3>
        </article>
      </div>
    </a>
  );
}
