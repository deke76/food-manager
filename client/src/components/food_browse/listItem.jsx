import classNames from "classnames";
import Button from "./../buttons/Button"

export default function FoodListItem(props) {
  const { item } = props;
  const classes = classNames("food-list--item", "group");

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.shelf_id}</td>
      <td>{item.expires}</td>
      <td>{item.quantity} {item.quantity_units}</td>
    </tr>
  );
}
