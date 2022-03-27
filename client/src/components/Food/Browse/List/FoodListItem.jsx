import React, { useContext, useEffect, useState } from "react";
import Button from "../../../buttons/actions/Button";
import moment from "moment";
import classNames from "classnames";
import "./foods.scss";

import Counter from "./../../../buttons/counter";
import { userContext } from "./../../../../providers/UserProvider";
import axios from "axios";

export default function FoodListItem(props) {
  const { food } = props;
  const { user } = useContext(userContext);

  const expired = moment().isAfter(moment(food.date_expires));
  const classes = classNames("list-item", { expired });

  const daysToExpiry = moment(food.date_expires).from(moment());

  const [qty, setQty] = useState(food.quantity);

  useEffect(() => {
    const url = `http://localhost:3000/users/${user}/locations/${food.location_id}/foods/${food.id}`;
    axios.patch(url, { quantity: qty });
  }, [food.id, food.location_id, qty, user]);

  return (
    <tr className={classes}>
      <td className={"list-item__name"}>{food.name}</td>

      <td className={"list-item__quantity"}>
        <Counter value={qty} setValue={setQty} maxValue={20} minValue={0} />
      </td>
      <td className={"list-item__units"}>{food.quantity_units}</td>
      <td className={"list-item__expiry"}>
        {expired ? "expired" : "expires"} {daysToExpiry}
      </td>
    </tr>
  );
}
