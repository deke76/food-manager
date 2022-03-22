export default function FoodList(props) {
  const { items } = props;
  return (
    <div className="food-item-list">
      {items.map((item) => (
        <div className="food-item">
          <div className="food-item--name">{item.name}</div>
          <div className="food-item--location">{item.location}</div>
          <div className="food-item--date-expired">{item.dateExpired}</div>
        </div>
      ))}
    </div>
  );
}
