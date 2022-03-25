// import { useState } from "react";
import { BrowserRouter, Routes, useRoutes, Route } from "react-router-dom";

import "./App.css";

import UserProvider from "./providers/UserProvider";
import HeaderBar from "./components/header";
import FoodAdd from "./components/Food/Add";
// import Calendar from "./components/Food/Browse/Calendar";
import FoodBrowse from "./components/Food/Browse";

// Main application file
export default function App(props) {
  return (
    <div>
      <UserProvider>
        <HeaderBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FoodBrowse />} />
            <Route path="/food" element={<FoodBrowse />} />
            <Route path="/food/add" element={<FoodAdd />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
