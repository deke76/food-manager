// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";

import UserProvider from "./providers/UserProvider";
import LocationProvider from "./providers/LocationProvider";

import HeaderBar from "./components/header";
import NavBar from "./components/nav/NavBar";

import FoodAdd from "./components/Food/Add";

import FoodBrowse from "./components/Food/Browse";
import LocationBrowse from "./components/Locations/Browse";
import Landing from "./components/landing";
import LocationList from "./components/Locations/Browse/locationList";

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
                <Route path="/" element={<Landing />} />
                <Route path="/foods" element={<FoodBrowse locations={'/locations'} />} />
                <Route path="/foods/add" element={<FoodAdd />} />
                <Route path="/locations" element={<LocationList />} />
              </Routes>
            </div>
            <NavBar />
          </BrowserRouter>
        </LocationProvider>
      </UserProvider>
    </div>
  );
}
