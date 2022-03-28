import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";

import { stateContext } from "./../../../providers/StateProvider";
import { userContext } from "../../../providers/UserProvider";

import Counter from "../../buttons/counter";
import SelectOneDropdown from "../../buttons/selectOne";

import "./index.scss";
import axios from "axios";
import moment from "moment";
import Button from "../../buttons/actions/Button";

export default function FoodAdd(props) {
  // Search values
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const { state } = useContext(stateContext);
  const { user } = useContext(userContext);

  const defaultFood = {
    name: "Add Food Item...",
    quantity: 1,
    quantity_units: "ea",
    date_purchased: moment().format("YYYY-MM-DD"),
    date_expires: moment().add(10, "days").format("YYYY-MM-DD"),
  };

  const [newFood, setNewFood] = useState(defaultFood);
  const foodUnitOptions = ["ea", "oz", "gal", "L", "kg", "lb"];

  // const save = () => {
  //   axios.post
  // }

  // Fetch suggestions from server
  useEffect(() => {
    if (searchValue.length > 0) {
      const url = "http://localhost:3000/foods/autocomplete";
      const params = { query: searchValue };

      axios
        .get(url, { params })
        .then((response) => setSuggestions(response.data))
        .catch((e) => {
          console.error(e.stack);
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchValue]);

  // set newFood state whenever qty counter changes
  const [showFoodQty, setShowFoodQty] = useState(false)
  const [foodQtyNum, setFoodQtyNum] = useState(1);
  const [foodQtyUnit, setFoodQtyUnit] = useState(0);
  useEffect(() => {
    setNewFood((prev) => ({
      ...prev,
      quantity: foodQtyNum,
      quantity_units: foodQtyUnit,
    }));
  },[foodQtyNum, foodQtyUnit]);

  // useEffect(() => {
  //   suggestions &&
  //     selectedSuggestion !== null &&
  //     setFoodName(suggestions[selectedSuggestion].name.toUpperCase());
  // }, [selectedSuggestion, suggestions]);

  return defaultFood ? (
    <div className="food-add">
      <h1>{newFood.name}</h1>
      <div className="food-add__input">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSelectedSuggestion(null);
            setSearchValue(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          placeholder="Search for food..."
        />
        <Button icon="barcode"/>
      </div>
      {showSuggestions &&
        (suggestions.length > 0 ? (
          <SelectOneDropdown
            selected={selectedSuggestion}
            setSelected={setSelectedSuggestion}
            choices={suggestions.map((suggestion) => suggestion.name)}
            onClickCallback={() => setShowSuggestions(false)}
          />
        ) : (
          <div>No Suggestions</div>
        ))}
      <div className="food-add__details">
        <div className="group">
          <label>Date Purchased</label>
          <input
            type="date"
            value={newFood.date_purchased}
            onChange={(event) =>
              setNewFood((prev) => ({
                ...prev,
                date_purchased: event.target.value,
              }))
            }
          />
        </div>
        <div className="group">
          <label>Date Expires</label>
          <input
            type="date"
            value={newFood.date_expires}
            onChange={(event) =>
              setNewFood((prev) => ({
                ...prev,
                date_expires: event.target.value,
              }))
            }
          />
        </div>
        <div className="group">
          <label>Quantity</label>
          <div className="group">
            <Counter
              value={foodQtyNum}
              setValue={setFoodQtyNum}
              minValue={0}
              maxValue={100}
            />
            <div onClick={() => setShowFoodQty((prev) => !prev)}>
              {foodUnitOptions[foodQtyUnit]}
            </div>
          </div>
        </div>
        {showFoodQty && (
          <SelectOneDropdown
            selected={foodQtyUnit}
            setSelected={setFoodQtyUnit}
            choices={foodUnitOptions.map((foodUnitOption) => foodUnitOption)}
            onClickCallback={() => setShowFoodQty(false)}
          />
        )}
      </div>
      <div className="group">
        <button>SAVE</button>
      </div>
    </div>
  ) : (
    <div>Error: Could not read data</div>
  );
}
