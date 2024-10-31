import './App.css';
import React, { useState } from 'react';
import Button from "./components/Button/Button";
import CardBigMain from './components/CardBigMain/CardBigMain';
import pers from "../src/assets/images/nav/pers.png";
import CardSmallMain from './components/CardSmallMain/CardSmallMain';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';
import Main from './containers/Main/Main';
import Events from './containers/Events/Events';
import Events2 from './containers/Events/Events2';
import Sections from './containers/Sections/Sections';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sect1 from './containers/Sect/sect1';
import Timetable from './containers/Timetable/Timetable';

import Registration from './components/Registration/Registration';
import Registr from './containers/Registr/Registr';
import Login from './containers/Login/Login';
import Entrance from './components/Entrance/Entrance';
function App() {
  return (
    
    <>
    <Nav/>
    </>
  );
}

export default App;
