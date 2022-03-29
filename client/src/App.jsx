import RecipeBrowse from "./components/Recipes";

import { UserProvider } from "./providers/UserProvider";
import { StateProvider } from "./providers/StateProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar from "./components/header";
import LocationList from "./components/Locations/locationList";
import FoodAdd from "./components/Food/Add";
import FoodBrowse from "./components/Food/Browse";
import FloatingActionButton from "./components/buttons/fab";

import "./styles/app.scss";

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
              <div className="content__main">
                <Routes>
                  <Route path="/" element={<FoodBrowse />} />
                  <Route path="/foods/add" element={<FoodAdd />} />
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
