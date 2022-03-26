import "./locationCard.scss"

export default function LocationCard(props) {
  const { location } = props;
  return (
    <div className="location-card">
      <header>
        <h4 className="location-card__title">{location.name}</h4>
        <div className="location-card__quantity">{location.num_children } items</div>
      </header>
      <article className="location-card__details">
        <div>{location.city}, {location.province}</div>
        <div>{location.country}</div>
      </article>
    </div>
  );
}
