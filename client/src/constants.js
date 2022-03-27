import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import classNames from 'classnames';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { locationContext } from './providers/LocationProvider';
import { userContext } from './providers/UserProvider';
import { useNavigate } from 'react-router';
// import { locationTreeHelper } from './helpers/locationTreeHelpers';
import { recipes } from './components/Recipes/testData';

// Components
import SelectOneDropdown from './components/buttons/selectOne';
import FoodListItem from './components/Food/Browse/';
import Ingredients from './components/Recipes/Ingredients';
import CalendarDay from './components/Food/Browse/Calendar/CalendarDay';
import Calendar from './components/Food/Browse/Calendar';
import LinkButton from './components/buttons/link';
import RecipeCard from './components/Recipes/RecipeCard';
import Counter from './components/buttons/counter';
import Button from './components/buttons/actions/Button';
import App from './App';
import FoodList from './components/Food/Browse/List/FoodList';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAnglesRight,
  faAppleWhole,
  faCaretRight,
  faAnglesLeft,
  faPlusCircle,
  faCaretLeft,
  faUtensils,
  faBarcode,
  faCircle,
  faTrash,
  faPlus,
  faUser,
  faPen
} from "@fortawesome/free-solid-svg-icons";


import useFetchServer from "./hooks/useFetchServer";
export { 
  App,
  Link, 
  axios,
  faPen,
  React, 
  moment, 
  faPlus,
  faUser,
  Button,
  recipes, 
  faTrash,
  Counter,
  useState,
  ReactDOM, 
  faCircle,
  Calendar,
  FoodList,
  useEffect,
  faBarcode,
  useContext,
  classNames,
  LinkButton,
  RecipeCard, 
  faUtensils,
  CalendarDay,
  userContext,
  faCaretLeft,
  Ingredients,
  useNavigate,
  faAnglesLeft,
  faCaretRight,
  faPlusCircle,
  faAppleWhole,
  FoodListItem,
  faAnglesRight,
  faLocationDot,
  useFetchServer,
  reportWebVitals,
  locationContext, 
  FontAwesomeIcon,
  SelectOneDropdown,
  serviceWorkerRegistration
};