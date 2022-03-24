import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Counter from "../buttons/counter";

import "./index.scss";
import axios from "axios";
import moment from "moment";
import SelectOneDropdown from "../buttons/selectOne";

export default function FoodAdd(props) {
  // Search values
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  // New Food Values
  const [foodName, setFoodName] = useState("New Food Item");
  const [foodDateExpiry, setFoodDateExpiry] = useState(
    moment().add(10, "days").format("YYYY-MM-DD")
  );
  const [foodDatePurchase, setFoodDatePurchase] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [foodQtyNum, setFoodQtyNum] = useState(1);
  const [foodQtyUnit, setFoodQtyUnit] = useState(0);
  const foodUnitOptions = [
    "each",
    "ounce",
    "gallon",
    "liter",
    "kilogram",
    "pound",
  ];

  // Fetch suggestions from server
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

  useEffect(() => {
    suggestions &&
      selectedSuggestion !== null &&
      setFoodName(suggestions[selectedSuggestion].name);
  }, [selectedSuggestion, suggestions]);

  return (
    <div className="food-add">
      <h3>{foodName}</h3>
      <div className="food-add__input">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSelectedSuggestion(null);
            setSearchValue(e.target.value);
          }}
          onClick={() => setShowSuggestions(true)}
        />
        <div className="barcode-btn">
          <FontAwesomeIcon icon={faBarcode} />
        </div>
      </div>
      {showSuggestions && (
        <SelectOneDropdown
          selected={selectedSuggestion}
          setSelected={setSelectedSuggestion}
          choices={suggestions.map((suggestion) => suggestion.name)}
          onClickCallback={() => setShowSuggestions(false)}
        />
      )}
      <div className="food-add__details">
        <div className="group">
          <label>Date Purchased</label>
          <input
            type="date"
            value={foodDatePurchase}
            onChange={(e) => setFoodDatePurchase(e.target.value)}
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
        </div>
      </div>
    </div>
  );
}
