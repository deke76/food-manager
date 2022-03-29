// import { 
//   BrowserRouter, Routes, Route, 
//   UserProvider, StateProvider,
//   FloatingActionButton, FoodAdd, FoodBrowse,
//   LocationList } from "./constants";
  import React from 'react';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

  import { UserProvider } from "./providers/UserProvider";

  import { StateProvider } from "./providers/StateProvider";

  import LocationList from './components/Locations/locationList';

  import FoodBrowse from './components/Food/Browse/index';

  import FloatingActionButton from './components/buttons/fab';

  import FoodAdd from './components/Food/Add'

  import HeaderBar from "./components/header"
  import RecipeBrowse from "./components/Recipes";
  
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
              <div className='content__main'>
                  <Routes>
                  <Route path="/" element={<FoodBrowse />} />
                  <Route path="/foods/add" element={<FoodAdd />} />
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
