import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import classNames from 'classnames';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from 'react';
import { locationContext } from './providers/LocationProvider';
import { userContext } from './providers/UserProvider';
import { useNavigate } from 'react-router';
import UserProvider from './providers/UserProvider';
import { StateProvider, stateContext } from './providers/StateProvider';


// Components
import App from './App';
import Button from './components/buttons/actions/Button';
import Calendar from './components/Food/Browse/Calendar';
import CalendarDay from './components/Food/Browse/Calendar/CalendarDay';
import Counter from './components/buttons/counter';
import FloatingActionButton from './components/buttons/fab'
import FoodAdd from './components/Food/Add';
import FoodBrowse from './components/Food/Browse'
import FoodList from './components/Food/Browse/List/FoodList';
import FoodListItem from './components/Food/Browse/';
import HeaderBar from './components/header'
import Ingredients from './components/Recipes/Ingredients';
import LinkButton from './components/buttons/link';
import LocationList from './components/Locations/locationList';
import LocationCard from './components/Locations/locationCard';
import LocationCardNew from './components/Locations/locationCardNew';
import RecipeBrowse from './components/Recipes';
import RecipeCard from './components/Recipes/RecipeCard';
import SelectOneDropdown from './components/buttons/selectOne';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faAppleWhole,
  faBarcode,
  faCaretLeft,
  faCaretRight,
  faCircle,
  faLocationDot,
  faSave,
  faPen,
  faPlus,
  faPlusCircle,
  faUtensils,
  faTrash,
  faUser
} from "@fortawesome/free-solid-svg-icons";


import useFetchServer from "./hooks/useFetchServer";
export { 
  App,
  axios,
  Button,
  BrowserRouter,
  Calendar,
  CalendarDay,
  classNames,
  Counter,
  createContext,
  faAnglesLeft,
  faBarcode,
  faCaretLeft,
  faCircle,
  faPen,
  faAnglesRight,
  faLocationDot,
  faPlus,
  faCaretRight,
  faPlusCircle,
  faAppleWhole,
  faSave,
  faTrash,
  faUser,
  faUtensils,
  FloatingActionButton,
  FoodAdd,
  FoodBrowse,
  FoodList,
  FoodListItem,
  FontAwesomeIcon,
  HeaderBar,
  Ingredients,
  Link, 
  LinkButton,
  LocationCard,
  LocationCardNew,
  LocationList,
  locationContext, 
  moment, 
  React, 
  ReactDOM,  
  RecipeBrowse,
  RecipeCard, 
  Route,
  Routes,
  SelectOneDropdown,
  serviceWorkerRegistration,
  reportWebVitals,
  useContext,
  userContext,
  useEffect,
  useFetchServer,
  useNavigate,
  UserProvider,
  useState,
  stateContext,
  StateProvider
};