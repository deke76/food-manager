// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";

import UserProvider from "./providers/UserProvider";
import LocationProvider from "./providers/LocationProvider";

import HeaderBar from "./components/header";
import NavBar from "./components/nav/NavBar";

import FoodAdd from "./components/Food/Add";
import LocationAdd from "./components/Locations/Add";

import FoodBarcode from "./components/Food/Add/foodBarcode";

import FoodBrowse from "./components/Food/Browse";
import LocationBrowse from "./components/Locations/Browse";

// Main application file
export default function App(props) {
  return (
    <div>
      <UserProvider>
        <LocationProvider>
          <BrowserRouter>
            <HeaderBar />
            <div className="content">
              <Routes>
                <Route path="/" element={<FoodBrowse />} />
                <Route path="/foods" element={<FoodBrowse />} />
                <Route path="/foods/add" element={<FoodAdd />} />
                <Route path="/foods/barcode" element={<FoodBarcode />} />
                <Route path="/locations" element={<LocationBrowse />} />
                <Route path="/locations/add" element={<LocationAdd />} />
              </Routes>
            </div>
            <NavBar />
          </BrowserRouter>
        </LocationProvider>
      </UserProvider>
    </div>
  );
}
