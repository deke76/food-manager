// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";

import UserProvider from "./providers/UserProvider";
import LocationProvider from "./providers/LocationProvider";

import HeaderBar from "./components/Navigation/header/index";
import NavBar from "./components/Navigation/nav/NavBar";

import FoodAdd from "./components/Food/Add";

import FoodBrowse from "./components/Food/Browse";
import LocationList from "./components/Locations/Browse/locationList";
import RecipeBrowse from "./components/Recipes";
import Calendar from './components/Food/Browse/Calendar'
import FloatingActionButton from "./components/buttons/fab";

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
                <Route path="/locations" element={<LocationList />} />
                <Route path='/recipes' element={<RecipeBrowse />} />
              </Routes>
            </div>
            <NavBar />
          </BrowserRouter>
        </LocationProvider>
      </UserProvider>
    </div>
  );
}
