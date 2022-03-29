import { 
  BrowserRouter, Routes, Route, 
  UserProvider, StateProvider,
  FloatingActionButton, FoodAdd, FoodBrowse,
  HeaderBar, LocationList } from "./constants";

  import RecipeBrowse from "./components/Recipes";
  
  import "./styles/app.scss";


// Main application file
export default function App(props) {
  // const [foodName, setFoodName] = useState("New Food Item");
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
