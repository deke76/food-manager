// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import UserProvider from "./providers/UserProvider";
import LocationProvider from "./providers/LocationProvider";

import HeaderBar from "./components/header";
import NavBar from "./components/nav/NavBar";

import FoodAdd from "./components/Food/Add";
import LocationAdd from "./components/Locations/Add";

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
            <Routes>
              <Route path="/" element={<FoodBrowse />} />
              <Route path="/foods" element={<FoodBrowse />} />
              <Route path="/foods/add" element={<FoodAdd />} />
              <Route path="/locations" element={<LocationBrowse />} />
              <Route path="/locations/add" element={<LocationAdd />} />
            </Routes>
            <NavBar />
          </BrowserRouter>
        </LocationProvider>
      </UserProvider>
    </div>
  );
}
