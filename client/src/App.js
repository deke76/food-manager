import { useState } from "react";
import "./App.css";

import UserProvider from "./providers/UserProvider";
import HeaderBar from "./components/header";
import FoodBrowse from "./components/Food/Browse";

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
        {/* <FoodBrowse /> */}
      </UserProvider>
    </div>
  );
}
