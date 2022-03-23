import FoodListItem from "./listItem";

export default function FoodList(props) {
  const { items } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Food</th>
          <th>Location</th>
          <th>Expiry Date</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <FoodListItem key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
}
