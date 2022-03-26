// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";

import UserProvider from "./providers/UserProvider";
import LocationProvider from "./providers/LocationProvider";

import HeaderBar from "./components/header";
import NavBar from "./components/nav/NavBar";

import FoodAdd from "./components/Food/Add";

import FoodBrowse from "./components/Food/Browse";
import LocationList from "./components/Locations/Browse/locationList";

import FloatingActionButton from "./components/buttons/fab";
import LocationAdd from "./components/Locations/Add";

// Main application file
export default function App(props) {
  return (
    <div>
      <UserProvider>
        <LocationProvider>
          <BrowserRouter>
            <HeaderBar />
            <div className="content">
            <FloatingActionButton linkTo="/foods/add" />
            <LocationList />
              <Routes>
                <Route path="/" element={<FoodBrowse />} />
                <Route path="/foods/add" element={<FoodAdd />} />
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
