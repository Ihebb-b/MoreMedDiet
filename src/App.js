import logo from './logo.svg';
import './App.css';
import './assets/images/favicon.ico'
import './assets/css/plugins-css.css'
import './assets/revolution/css/settings.css'
import './assets/css/typography.css'
import './assets/css/shortcodes/shortcodes.css'
import './assets/css/style.css'

import './assets/css/responsive.css'
import './assets/js/plugins-jquery.js'
import './assets/js/custom.js'
import './assets/js/test.js'

import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Page/Home';
import Marketplace from './components/Marketplace/Marketplace.js';
import DetailProduct from './components/Marketplace/DetailProduct.js';
import Cart from './components/Marketplace/Cart.js';
import Profile from './components/Profile/Profile.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import MyRecipes from './components/Chefs/MyRecipes.js';
import DemographicStatistics from './components/Page/statistics/DemographicStatistics.js';
import HealthAndDiet from './components/Page/statistics/HealthAndDiet.js';
import DietaryPreferences  from './components/Page/statistics/DietaryPreferences.js';
import EconomicAndSocial from './components/Page/statistics/EconomicAndSocial.js';
import NutritionalInsights
 from './components/Page/statistics/NutritionalInsights.js';
import Pizza from './components/Page/statistics/Pizza.js';
function App() {
  return (
    <div className="App">
       <BrowserRouter basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))}>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/marketplace" element={<Marketplace/>}/>
          <Route path="/demographic" element={<DemographicStatistics/>}/>
          <Route path="/health" element={<HealthAndDiet/>}/>
          <Route path="/dietary" element={<DietaryPreferences/>}/>
          <Route path="/economic" element={<EconomicAndSocial/>}/>
          <Route path="/nutritional" element={<NutritionalInsights/>}/>
          <Route path="/pizza" element={<Pizza/>}/>
          <Route path="/detailProduct" element={<DetailProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/recipes" element={<MyRecipes/>}/>


        </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
