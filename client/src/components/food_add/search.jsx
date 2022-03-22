import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../buttons/Button";

export default function CreateFood(props) {
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
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion">
            <div className="suggestion--name">{suggestion.name}</div>
            {/* <Button icon="plus" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
