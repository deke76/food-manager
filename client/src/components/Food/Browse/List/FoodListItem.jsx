
import Counter from "../../../buttons/counter"
import { userContext } from "../../../../providers/UserProvider";

import axios from "axios";
import classNames from "classnames";
import moment from "moment";
import { useEffect, useState, useContext } from "react";

import "./FoodListItem.scss";

export default function FoodListItem(props) {
  const { food } = props;
  const { user } = useContext(userContext);

  const [qty, setQty] = useState(food.quantity);

  const expired = moment().isAfter(moment(food.date_expires));
  const daysToExpiry = moment(food.date_expires).from(moment());

  useEffect(() => {
    const url = `http://localhost:3000/users/${user}/locations/${food.location_id}/foods/${food.id}`;
    axios.patch(url, { quantity: qty });
  }, [food.id, food.location_id, qty, user]);

  const classes = classNames("food-list-item", { expired });

  return (
    <div className={classes}>
      <span className="left">
        <h4>{food.name}</h4>
        <span className="details">
          {expired ? "expired" : "expires"} {daysToExpiry}
        </span>
      </span>
      <div className="qty">
        <Counter value={qty} setValue={setQty} maxValue={20} minValue={0} />{" "}
        <span>{food.quantity_units}</span>
      </div>
    </div>

    // <tr className={classes}>
    //   <td className={"list-item__name"}>{food.name}</td>

    //   <td className={"list-item__quantity"}>
    //     <Counter value={qty} setValue={setQty} maxValue={20} minValue={0} />
    //   </td>
    //   <td className={"list-item__units"}>{food.quantity_units}</td>
    //   <td className={"list-item__expiry"}>
    //     {expired ? "expired" : "expires"} {daysToExpiry}
    //   </td>
    // </tr>
  );
}
