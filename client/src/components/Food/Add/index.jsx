import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Counter from "../../buttons/counter";

import "./index.scss";
import axios from "axios";
import moment from "moment";
import SelectOneDropdown from "../../buttons/selectOne";
import Barcode from "./barcode";

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
  const [showFoodQty, setShowFoodQty] = useState(false);
  const foodUnitOptions = [
    "each",
    "ounce",
    "gallon",
    "liter",
    "kilogram",
    "pound",
  ];

  // Barcode scanner
  const [showBarcode, setShowBarcode] = useState();

  // const save = () => {
  //   axios.post
  // }


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
      setFoodName(suggestions[selectedSuggestion].name.toUpperCase());
  }, [selectedSuggestion, suggestions]);

  useEffect(() => {
    searchValue === "" && setSuggestions([])
  },[searchValue])

  return (
    <div className="food-add">
      <h1>{foodName}</h1>
      <div className="food-add__input">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSelectedSuggestion(null);
            setSearchValue(e.target.value);
          }}
          onClick={() => setShowSuggestions(true)}
          placeholder="Search for food..."
        />
         {showBarcode ? <Barcode/> : ""} 
        <div className="barcode-btn">
          <FontAwesomeIcon onClick={() => setShowBarcode(true)} icon={faBarcode} />
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

          <div className="group">
            <Counter
              value={foodQtyNum}
              setValue={setFoodQtyNum}
              minValue={0}
              maxValue={100}
            />
            <div onClick={() => setShowFoodQty(prev => !prev)}>{foodUnitOptions[foodQtyUnit]}</div>
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
        <button>Save and Exit</button>
        <button>Save and Add Another</button>
      </div>
    </div>
  );
}
