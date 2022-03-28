import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";

import UserProvider from "./providers/UserProvider";
import LocationProvider from "./providers/LocationProvider";
import StateProvider from "./providers/StateProvider";

import HeaderBar from "./components/header";

import FoodAdd from "./components/Food/Add";

import FoodBarcode from "./components/Food/Add/foodBarcode";

import FoodBrowse from "./components/Food/Browse";
import LocationList from "./components/Locations/Browse/locationList";
import RecipeBrowse from "./components/Recipes";
import FloatingActionButton from "./components/buttons/fab";

// Main application file
export default function App(props) {
  const [foodName, setFoodName] = useState("New Food Item");
  return (
    <div>
      <UserProvider>
        <StateProvider>
          <BrowserRouter>
            <HeaderBar />
            <div className="content">
              <LocationList />
<<<<<<< HEAD
              <Routes>
                <Route path="/" element={<FoodBrowse />} />
                <Route path="/foods/add" element={<FoodAdd foodName={foodName} setFoodName={setFoodName} />} />
                <Route path="/foods/barcode" element={<FoodBarcode foodName={foodName} setFoodName={setFoodName} />} />
                <Route path="/locations" element={<LocationList />} />
                <Route path="/recipes" element={<RecipeBrowse />} />
              </Routes>
=======
              <div className='content__main'>
                  <Routes>
                  <Route path="/" element={<FoodBrowse />} />
                  <Route path="/foods/add" element={<FoodAdd />} />
                  <Route path="/locations" element={<LocationList />} />
                  <Route path="/recipes" element={<RecipeBrowse />} />
                </Routes>
              </div>
>>>>>>> main
            </div>
            <FloatingActionButton linkTo={{foods: "/foods/add", recipes:"/recipes"}}/>
          </BrowserRouter>
        </StateProvider>
      </UserProvider>
    </div>
  );
}
