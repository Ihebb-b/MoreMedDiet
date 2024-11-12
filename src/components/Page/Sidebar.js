import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink} from "react-router-dom"
import axios from 'axios'
import './Index.css'
import { Modal, Button } from 'react-bootstrap';

//import Global from "../../util/Global";

// const useTranslation = React.lazy(() => import("react-i18next"));
//const CART_URL = Global.baseurl+"/GIPP_Symfony_MarketPlace/public/index.php/panier/showall";
//const CART_URL2 = Global.baseurl+"/GIPP_Symfony_MarketPlace/public/index.php/panierEquipement/showallInPanier";
export default function Sidebar({page,inscription}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return(
    <>
       <div  class={`sidebar-open ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
    <div class="app-sidebar1">
    <span class="app-icon mb-50 "  style={{cursor:"pointer"}} onClick={toggleSidebar}></span>
    <NavLink  to="/" className="app-sidebar-link" >
      <i class="fa fa-home"></i>

          <span> Home</span>
      </NavLink>
      <NavLink  to="/dashboard" className={ (page === "dashboard") ? "app-sidebar-link active2" : "app-sidebar-link" }>
      <i class="fa fa-line-chart fa-lg"></i>

          <span> Dashboard</span>
      </NavLink>
      <NavLink to="/recipes" className={ (page === "recipes") ? "app-sidebar-link active2" : "app-sidebar-link" }>
      <i class="fa fa-table fa-lg"></i> 
      <span> Recipes</span>

      </NavLink>
      <NavLink to="/recipes" className={ (page === "profile") ? "app-sidebar-link active2" : "app-sidebar-link"}>
      <i class="fa fa-street-view fa-lg"></i> 
      <span> User Profile</span>

      </NavLink>
      <NavLink to="/hi" className={ (page === "settings") ? "app-sidebar-link active2" : "app-sidebar-link" }>
      <i class="fa fa-cog fa-lg"></i> 
      <span> Settings</span>

      </NavLink>
      <NavLink to="/hi" className={  "app-sidebar-link" }>
      <i class="fa fa-sign-out "></i> 
      <span> Logout</span>

      </NavLink>

    </div>
   
  
    </div>
   </>
)
} 

