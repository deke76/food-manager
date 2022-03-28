// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app.scss";

import UserProvider from "./providers/UserProvider";
import StateProvider from "./providers/StateProvider";

import HeaderBar from "./components/header";

import FoodAdd from "./components/Food/Add";

import FoodBrowse from "./components/Food/Browse";
import LocationList from "./components/Locations/locationList";
import RecipeBrowse from "./components/Recipes";
import FloatingActionButton from "./components/buttons/fab";

// Main application file
export default function App(props) {
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
                  <Route path="/foods/add" element={<FoodAdd />} />
                  <Route path="/locations" element={<LocationList />} />
                  <Route path="/recipes" element={<RecipeBrowse />} />
                </Routes>
              </div>
            </div>
            <FloatingActionButton/>
          </BrowserRouter>
        </StateProvider>
      </UserProvider>
    </div>
  );
}
