import { useContext } from 'react';
import { stateContext } from "./../../providers/StateProvider";
import Ingredients from './Ingredients';
import Button from '../buttons/actions/Button';
import "./RecipeCard.scss";
import axios from 'axios';

export default function RecipeCard(props) {
  const { recipe, onClick } = props;
  const { state } = useContext(stateContext);

  const recipeMailer = function(user) {
    const id = state.locations[0].user_id;
    const url = `http://localhost:3000/recipes/email?id=${id}`;
    console.log(url);
    axios.get(url)
      .then(res => console.log(res.data.email))
      .catch(res => console.log("You're email isn't in our database, please check your information."))
  }
  
  // Build the missing ingredients
  const ingredients = 
    recipe.missedIngredients.map(ingredient =>
      <Ingredients
        key={ingredient.id}
        ingredient={ingredient}
      />);

  return (
    <div className={'recipe-card'}>
      <article className="recipe-card__details" onClick={onClick}>
        <img src={recipe.image} className='recipe-card__img'  alt='' />
      </article>
      <h4 className="recipe-card__title">{recipe.title}</h4>
      <h4 className='recipe-card__missing-ingredients'>
        <Button icon='email' onClick={() => recipeMailer(state)} />Missing Ingredients
        <Button icon='check' linkTo='' /></h4>
      <table>
        <tbody>
          <tr>
            <th><h5>Name</h5></th>
            <th><h5>Quantity</h5></th>
            <th><h5>Units</h5></th>
          </tr>
          { ingredients }
        </tbody>
      </table>
      <div className='recipe-card__feedback'>
        <h3>{recipe.likes} likes!</h3>
      </div>
    </div>
  );
}