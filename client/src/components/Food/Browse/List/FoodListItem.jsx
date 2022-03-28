import { React, useContext, useEffect, useState, userContext, Counter, classNames, moment, axios } from "../../../../constants";
import "./foods.scss";

export default function FoodListItem(props) {
  const { food } = props;
  const { user } = useContext(userContext);

  const [qty, setQty] = useState(food.quantity);

  const expired = moment().isAfter(moment(food.date_expires));
  const daysToExpiry = moment(food.date_expires).from(moment());

  const classes = classNames("list-item", { expired });

  useEffect(() => {
    const url = `http://localhost:3000/users/${user}/locations/${food.location_id}/foods/${food.id}`;
    axios.patch(url, { quantity: qty });
  }, [food.id, food.location_id, qty, user]);

  return (
    <tr className={classes}>
      {qty > 0 && (
        <>
          <td className={"list-item__name"}>{food.name}</td>

          <td className={"list-item__quantity"}>
            <Counter value={qty} setValue={setQty} maxValue={20} minValue={0} />
          </td>
          <td className={"list-item__units"}>{food.quantity_units}</td>
          <td className={"list-item__expiry"}>
            {expired ? "expired" : "expires"} {daysToExpiry}
          </td>
        </>
      )}
    </tr>
  );
}
