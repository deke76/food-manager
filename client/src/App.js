import { useState } from "react";
import "./App.css";

import UserProvider from "./providers/UserProvider";
import HeaderBar from "./components/header";
<<<<<<< HEAD
import FoodBrowse from "./components/Food/Browse";
import LocationBrowse from "./components/Locations/Browse/index"
=======
import FoodAdd from "./components/food_add";

>>>>>>> page/new-food

// Main application file
export default function App() {
  const HOME = "HOME";
  const FOOD_BROWSE = "FOOD_BROWSE";
  const FOOD_READ = "FOOD_READ";
  const FOOD_ADD = "FOOD_ADD";
  const LOCATION_BROWSE = "LOCATION_BROWSE";
  const LOCATION_READ = "LOCATION_READ";
  const LOCATION_ADD = "LOCATION_ADD";
  const [view, setView] = useState(HOME);

  return (
    <div className="App">
      <UserProvider>
        <HeaderBar />
<<<<<<< HEAD
        {/* <FoodBrowse /> */}
=======
        <FoodAdd />
        {/* <FoodBrowse />
        {view === FOOD_ADD && <FoodBrowse />}
        {view === FOOD_BROWSE && <FoodBrowse />} */}
>>>>>>> page/new-food
      </UserProvider>
    </div>
  );
}
