import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Counter from "../buttons/counter";

import "./index.scss";
import axios from "axios";
import moment from "moment";

export default function FoodAdd(props) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const [foodDateExpiry, setFoodDateExpiry] = useState(
    moment().add(10, "days").format("YYYY-MM-DD")
  );
  const [foodDatePurchase, setFoodDatePurchase] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [foodQtyNum, setFoodQtyNum] = useState(1);
  const [foodQtyUnit, setFoodQtyUnit] = useState("each");

  useEffect(() => {
    const url = "http://localhost:3000/foods/autocomplete";
    const params = searchValue.length > 0 ? { query: searchValue } : null;

    axios
      .get(url, { params })
      .then((response) => setSuggestions(response.data))
      .catch((e) => {
        console.error(e.stack);
        setSuggestions([]);
      });
  }, [searchValue]);

  return (
    <div className="food-add">
      <div className="food-add__input">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="barcode-btn">
          <FontAwesomeIcon icon={faBarcode} />
        </div>
      </div>
      {showSuggestions && (
        <div className="food-add__suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion"
              onClick={() => {
                setShowSuggestions(false);
                setSearchValue(suggestion.name);
              }}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
      <div className="food-add__details">
        <div className="group">
          <label>Date Purchased</label>
          <input
            type="date"
            value={foodDatePurchase}
            onChange={(e) => setFoodDateExpiry(e.target.value)}
          />
        </div>
        <div className="group">
          <label>Date Expires</label>
          <input
            type="date"
            value={foodDateExpiry}
            onChange={(e) => setFoodDateExpiry(e.target.value)}
          />
        </div>
        <div className="group">
          <label>Quantity</label>

          <Counter
            value={foodQtyNum}
            setValue={setFoodQtyNum}
            minValue={0}
            maxValue={100}
          />
          <select name="units" id="qty_units" className="qty-units">
            <option value="each" selected>
              each
            </option>
            <option value="oz">oz</option>
            <option value="gallon">gallon</option>
            <option value="liter">liter</option>
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>
      </div>
    </div>
  );
}
