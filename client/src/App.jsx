import RecipeBrowse from "./components/Recipes";
import { useState } from "react";

import { UserProvider } from "./providers/UserProvider";
import { StateProvider } from "./providers/StateProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar from "./components/header";
import LocationList from "./components/Locations/locationList";
import FoodAdd from "./components/Food/Add";
import FoodBarcode from './components/Food/Add/foodBarcode';
import FoodBrowse from "./components/Food/Browse";
import FloatingActionButton from "./components/buttons/fab";

import "./styles/app.scss";

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
                <div className='content__main'>
                <Routes>
                  <Route path="/" element={<FoodBrowse />} />
                  <Route path="/foods/add" element={<FoodAdd foodName={foodName} setFoodName={setFoodName} />} />
                  <Route path="/foods/barcode" element={<FoodBarcode foodName={foodName} setFoodName={setFoodName} />} />
                  <Route path="/recipes" element={<RecipeBrowse />} />
                </Routes>
                </div>  
            </div>
            <FloatingActionButton />
          </BrowserRouter>
        </StateProvider>
      </UserProvider>
    </div>
  );
}
