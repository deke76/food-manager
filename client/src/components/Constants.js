import Button from './buttons/actions/Button';
import Counter from './buttons/counter';
import FloatingActionButton from "./buttons/fab";
import FoodAdd from "./Food/Add";
import FoodBarCode from './Food/Add/foodBarcode';
import FoodBrowse from "./Food/Browse";
import FoodList from './Food/Browse/List/FoodList'
import HeaderBar from "./header";
import Ingredients from './Recipes/Ingredients';
import LocationCard from './Locations/locationCard';
import LocationCardNew from './Locations/locationCardNew';
import LocationList from "./Locations/locationList";
import RecipeBrowse from "./Recipes/index";
import RecipeCard from './Recipes/RecipeCard';
import SelectOneDropdown from './buttons/selectOne';
import UsedIngredients from './Recipes/UsedIngredients'

import { recipesTest } from './Recipes/testData';
import { stateContext, StateProvider } from "../providers/StateProvider";
import { userContext, UserProvider } from "../providers/UserProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlusCircle,
  faPlus,
  faAnglesLeft,
  faAnglesRight,
  faBarcode,
  faCamera,
  faCaretLeft,
  faCaretRight,
  faCheck,
  faEnvelope,
  faHeart, 
  faSave,
  faTrash,
  faUpload,
  faUtensils,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export { 
  Button,
  Counter,
  FloatingActionButton,
  faAnglesLeft,
  faAnglesRight,
  faCaretLeft,
  faCaretRight,
  faUtensils,
  faBarcode,
  faPlus,
  faPlusCircle,
  faTrash,
  faSave,
  faUser,
  faCheck,
  faCamera,
  faUpload,
  faEnvelope,
  faHeart,
  FontAwesomeIcon,
  FoodAdd,
  FoodBarCode,
  FoodBrowse,
  FoodList,
  HeaderBar,
  Ingredients,
  LocationCard,
  LocationCardNew,
  LocationList,
  recipesTest,
  RecipeBrowse,
  RecipeCard,
  SelectOneDropdown,
  stateContext,
  StateProvider,
  userContext,
  UsedIngredients,
  UserProvider };
