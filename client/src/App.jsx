import { BrowserRouter, Routes, Route } from './constants';
import { UserProvider,StateProvider } from './constants';
import { HeaderBar, FoodAdd, LocationList, FoodBrowse, RecipeBrowse, FloatingActionButton } from "./constants";

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
