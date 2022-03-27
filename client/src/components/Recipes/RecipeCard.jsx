import "./RecipeCard.scss";

export default function LocationCard(props) {
  const { name, picture, onClick } = props;
  
  return (
    <div className={'recipe-card'} onClick={onClick}>
      <article className="recipe-card__details">
        <img src={picture} className='recipe-card__img'  alt='' />
      </article>
      <h4 className="location-card__title">{name}</h4>
    </div>
  );
}