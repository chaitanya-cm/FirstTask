import './App.css';
// import './Iconfinder.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React,{useState, useEffect} from 'react';
import Weather from './Weather';
// import Iconfinder from './Iconfinder';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";


function App() {


  return (
    <Weather />
  );
}

export default App;
