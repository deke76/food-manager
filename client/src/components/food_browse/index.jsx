import  { useState,useEffect } from "react";
import axios from "axios";

export default function FoodBrowse(props) {
  const [view, setView] = useState(0);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/users/1/foods";
    axios.get(url).then((response) => {
      console.log(response.data)
      setFoodItems(response.data)
    });
  },[]);

  return (
    <div>
      {foodItems.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}
