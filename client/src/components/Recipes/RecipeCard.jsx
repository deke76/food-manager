import "./RecipeCard.scss";

export default function LocationCard(props) {
  const { name, onClick } = props;
  
  return (
    <div className={'recipe-card'} onClick={onClick}>
      <header>
        <h4 className="location-card__title">{name}</h4>
      </header>
      <article className="location-card__details">

      </article>
    </div>
  );
}