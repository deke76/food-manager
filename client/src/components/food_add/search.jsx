import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../buttons/Button"

export default function CreateFood(props) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // const url = "https://api.spoonacular.com/food/ingredients/autocomplete";
    const url = "https://api.spoonacular.com/food/products/suggest"

    axios
      .get(url, {
        params: {
          query: searchValue,
          number: 8,
          apiKey: "45cfcf8729b94e80adb967ba76fd883f",
        },
      })
      .then((response) => setSuggestions(response.data.results))
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
            <div className="suggestion--name">{suggestion.title}</div>
            <Button icon="plus" />
          </div>
        ))}
      </div>
    </div>
  );
}
