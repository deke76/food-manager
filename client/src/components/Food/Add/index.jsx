import { useEffect, useState } from "react";
import axios from "axios";
import Select from "../../buttons/select/Select";
import './index.scss';

export default function FoodSearch(props) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/foods/new";
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
    <div className='food-search'>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion">
            <div className="suggestion--name">{suggestion.name}</div>
          </div>
        ))}
      </div>
      <Select name={'Scan Barcode'} />
      
    </div>
  );
}
