import axios from "axios";
import moment from "moment";
import { useContext, useState, useEffect } from "react";
import Counter from "../../buttons/counter";

import Button from "../../buttons/actions/Button";
import SelectOneDropdown from "../../buttons/selectOne"

import { stateContext } from "../../../providers/StateProvider";
import { userContext } from "../../../providers/UserProvider";

import FoodBarCode from "./foodBarcode";

import "./index.scss";

export default function FoodAdd(props) {
  // Search values
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const { state, setState } = useContext(stateContext);
  const { user } = useContext(userContext);

  const defaultFood = {
    name: "New Food Item",
    quantity: 1,
    quantity_units: "ea",
    date_purchased: moment().format("YYYY-MM-DD"),
    date_expires: moment().add(10, "days").format("YYYY-MM-DD"),
  };

  const [newFood, setNewFood] = useState(defaultFood);
  const foodUnitOptions = ["ea", "oz", "gal", "L", "kg", "lb"];

  // Barcode scanner
  const [showBarcode, setShowBarcode] = useState();
  
  const save = () => {
    const url = `http://localhost:3000/users/${user}/locations/${state.currentLocation}/foods`;

    axios
      .post(url, { ...newFood })
      .then((response) => console.log(response));
  };


  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  // Fetch suggestions from server
  useEffect(() => {
    if (searchValue.length > 0) {
      const url = "http://localhost:3000/foods/autocomplete";
      const params = { query: searchValue };

      axios
        .get(url, { params })
        .then((response) => {
          if (Array.isArray(response.data)) {
            setSuggestions(response.data);
          } else {
            setSuggestions([{ name: "Out of points" }]);
          }
        })
        .catch((e) => {
          console.error("could not fetch suggestions");
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchValue]);

  // set newFood state whenever qty counter changes
  const [showFoodQty, setShowFoodQty] = useState(false);
  const [foodQtyNum, setFoodQtyNum] = useState(1);
  const [foodQtyUnit, setFoodQtyUnit] = useState(0);
  useEffect(() => {
    setNewFood((prev) => ({
      ...prev,
      quantity: foodQtyNum,
      quantity_units: foodUnitOptions[foodQtyUnit],
    }));
  }, [foodQtyNum, foodQtyUnit]);

  // useEffect(() => {
  //   suggestions &&
  //     selectedSuggestion !== null &&
  //     setFoodName(suggestions[selectedSuggestion].name.toUpperCase());
  // }, [selectedSuggestion, suggestions]);

  return (
    <div className="food-add">
      <h1>{newFood.name}</h1>
      <div className="group">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            // setSelectedSuggestion(null);
            setSearchValue(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
          placeholder="Search for food..."
        />  
        <Button
          icon="check"
          onClick={() => {
            setNewFood((prev) => ({
              ...prev,
              name: searchValue.length > 0 ? searchValue : "Enter a Food Name",
            }));
            setSearchValue("");
          }}
        />
          <Button onClick={() => setShowBarcode(true)} icon="barcode"/>
      </div>
        {showBarcode && (
          <FoodBarCode foodName={searchValue} setFoodName={setSearchValue} />
        )}
      {showSuggestions && (
        <SelectOneDropdown
          choices={
            suggestions.length === 0
              ? ["No Suggestions"]
              : suggestions.map((suggestion) => toTitleCase(suggestion.name))
          }
          setterValue={(value) => {
            console.log("set Search")
            setSearchValue(value)
          }}
          onClickCallback={() => {setShowSuggestions(false)}}
        />
      )}

      <div className="grid-container">
        <div className="label">Date Purchased</div>
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

        <div className="label">Date Expires</div>
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

        <div className="label">Quantity</div>
        <div className="input">
          <Counter
            value={foodQtyNum}
            setValue={setFoodQtyNum}
            minValue={1}
            maxValue={20}
          />
          <span onClick={() => setShowFoodQty((prev) => !prev)}>
            {foodUnitOptions[foodQtyUnit]}
          </span>
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

      <Button icon="save" text="Save" onClick={save} />
    </div>
  );
}
