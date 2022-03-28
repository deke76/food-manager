import "./RecipeCard.scss";
import Ingredients from './Ingredients';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function LocationCard(props) {
  const { recipe, onClick } = props;
  
  // Build the missing ingredients
  const ingredients = 
    recipe.missedIngredients.map(ingredient =>
      <Ingredients
        key={ingredient.id}
        ingredient={ingredient}
      />);
  
  return (
    <div className={'recipe-card'} onClick={onClick}>
      <article className="recipe-card__details">
        <img src={recipe.image} className='recipe-card__img'  alt='' />
      </article>
      <h4 className="recipe-card__title">{recipe.title}</h4>
      <h4 className='recipe-card__missing-ingredients'>
        <FontAwesomeIcon icon={faEnvelope} />  {recipe.missedIngredientCount} ingredients missing.</h4>
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
    </div>
  );
}