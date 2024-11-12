import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink} from "react-router-dom"
import axios from 'axios'
import './Index.css'
import { Modal, Button } from 'react-bootstrap';

//import Global from "../../util/Global";

// const useTranslation = React.lazy(() => import("react-i18next"));
//const CART_URL = Global.baseurl+"/GIPP_Symfony_MarketPlace/public/index.php/panier/showall";
//const CART_URL2 = Global.baseurl+"/GIPP_Symfony_MarketPlace/public/index.php/panierEquipement/showallInPanier";
export default function Header({page,inscription}) {
    const [darkMode, setDarkMode] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [messagesVisible, setMessagesVisible] = useState(false);
    const toggleHeader = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
   
  return(
    <>
  <button  title="Switch Theme"  className={`mode-switch ${darkMode ? 'active1' : ''}`}
       onClick={
        toggleHeader
      }>
        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button class="add-btn" title="Add New Project">
        <svg class="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" /></svg>
      </button>
      <button class="notification-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
      </button>
      <button class="profile-btn">
        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
        <span>Aybüke C.</span>
      </button>
     
   
   </>
)
} 

