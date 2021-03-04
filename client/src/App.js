import React, {useState} from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import Catalogue from "./components/Catalogue/Catalogue.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import {getProducts} from './Reducer/Action'
import "./app.css"
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {
 
 
  return (
    <ThemeProvider >
      <BrowserRouter>
        <Route exact path="/catalogue" component={NavBar} />
        <Route exact path="/catalogue" component={Catalogue}/> 
        <Route exact path="/" component={LandingPage} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
