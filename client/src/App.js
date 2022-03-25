// import { useState } from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/layout";

import UserProvider from "./providers/UserProvider";
import HeaderBar from "./components/header";
import FoodAdd from "./components/Food/Add";
// import Calendar from "./components/Food/Browse/Calendar";
import FoodBrowse from "./components/Food/Browse";

// Main application file
function App() {
  // const HOME = "HOME";
  // const FOOD_BROWSE = "FOOD_BROWSE";
  // const FOOD_READ = "FOOD_READ";
  // const FOOD_ADD = "FOOD_ADD";
  // const LOCATION_BROWSE = "LOCATION_BROWSE";
  // const LOCATION_READ = "LOCATION_READ";
  // const LOCATION_ADD = "LOCATION_ADD";
  // const [view, setView] = useState(HOME);

  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={FoodBrowse} />
          <Route path="/food" element={FoodBrowse} />
          <Route path="/food/add" element={FoodAdd} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
