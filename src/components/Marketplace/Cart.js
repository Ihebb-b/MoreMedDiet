import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink,useSearchParams} from "react-router-dom"
import axios from 'axios'
import './Marketplace.css'
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Page/Navbar';
import Footer from '../Page/Footer';
import { Select } from "antd";


export default function Cart({page}) {
 
  
  return(
    <>
   
   <div className="wrapper " >
        <div className=" ">
            <header id="header" className='header' >
               <div class="menu mr-70 ml-70 " >
                    <Navbar page="cart" />
                </div> 
		    </header>
        <main>
    <article>
    <section class="hero1 " >
      <div class=" container">
      <h2 style={{color:"white",textAlign:"left",marginTop:"80px"}}>
                Your cart<br /><br />
                </h2>
        <div class="row"><div class="col-md-8 col-sm-12">
    <div class="shopping-cart ">
    

      <div class="item">
      <div class="image">
          <img  src={require("../../assets/images/plat1.jpg")} alt="" style={{borderRadius:"5px"}} />
        </div>
        <div class="row"><div class="col-md-9">
        <div class="description">
        <span class="titre-cart">Chicken Pasta</span>
        <span style={{color:"gray"}}>Description............</span>
          <span class="price-cart">       $349</span>
        </div>
        </div><div class="col-md-3">
        <div class="quantity">
        <div class="buttons">
          <span class="delete-btn"><i class="fa fa-trash"></i></span>
        </div>
        <div class="buttons-cart">
          <button class="plus-btn button-cart" type="button" name="button">
            <i class="fa fa-plus"></i>
          </button>
          <input type="text" name="name" value="1"/>
          <button class="minus-btn button-cart" type="button" name="button">
          <i class="fa fa-minus"></i>
          </button>
        </div></div>
        </div></div>
      </div>

      <div class="item">
      <div class="image">
          <img src={require("../../assets/images/plat2.jpg")} alt="" style={{borderRadius:"5px"}} />
        </div>
        <div class="row"><div class="col-md-9">
        <div class="description">
        <span class="titre-cart">Chicken Pasta</span>
        <span style={{color:"gray"}}>Description............</span>
          <span class="price-cart">       $349</span>
        </div>
        </div><div class="col-md-3">
        <div class="quantity">
        <div class="buttons">
          <span class="delete-btn"><i class="fa fa-trash"></i></span>
        </div>
        <div class="buttons-cart">
          <button class="plus-btn button-cart" type="button" name="button">
            <i class="fa fa-plus"></i>
          </button>
          <input type="text" name="name" value="1"/>
          <button class="minus-btn button-cart" type="button" name="button">
          <i class="fa fa-minus"></i>
          </button>
        </div></div>
        </div></div>
      </div>

      <div class="item">
        <div class="image">
          <img src={require("../../assets/images/plat4.jpg")} alt="" style={{borderRadius:"5px"}} />
        </div>
        <div class="row"><div class="col-md-9">
        <div class="description">
          <span class="titre-cart">Chicken Pasta</span>
          <span style={{color:"gray"}}>Description............</span>
          <span class="price-cart">       $349</span>
        </div>
        </div><div class="col-md-3">
        <div class="quantity">
        <div class="buttons">
          <span class="delete-btn"><i class="fa fa-trash"></i></span>
        </div>
        <div class="buttons-cart">
          <button class="plus-btn button-cart" type="button" name="button">
            <i class="fa fa-plus"></i>
          </button>
          <input type="text" name="name" value="1"/>
          <button class="minus-btn button-cart" type="button" name="button">
          <i class="fa fa-minus"></i>
          </button>
        </div></div>
        </div></div>
        
      </div>
    </div>
    </div><div class="col-md-4 col-sm-12">
    <div class="shopping-cart1 ">
      <div class="title1">
        Order Summary
      </div>
      <div class="row mt-3">
        <div class="col-md-7" style={{textAlign:"left",paddingLeft:"25px",color:"gray",fontSize:"15px"}}>
          Subtotal
        </div>
        <div class="col-md-5" style={{textAlign:"right",paddingRight:"25px",fontSize:"15px"}}>
          $1047
        </div>

      </div>
      <div class="row mt-3">
        <div class="col-md-7" style={{textAlign:"left",paddingLeft:"25px",color:"gray",fontSize:"15px"}}>
          Discount 
        </div>
        <div class="col-md-5" style={{textAlign:"right",paddingRight:"25px",fontSize:"15px"}}>
         20%
        </div>

      </div>
      <hr></hr>
      <div class="row ">
        <div class="col-md-7" style={{textAlign:"left",paddingLeft:"25px",fontSize:"15px"}}>
          Total 
        </div>
        <div class="col-md-5" style={{textAlign:"right",paddingRight:"25px",fontSize:"15px"}}>
         $837,6
        </div>

      </div>
      <div class="row mt-3 mb-3 ">
        <div class="col-md-12" >
        <button className= "button11-border white"    style={{padding:"7px 133px",color:"white",borderRadius:"50px" }} >Connexion
        </button>        </div>
     

      </div>
     
     
    </div>
      </div></div>
    </div>
            </section>

            </article>
  </main>
  <Footer/>
        </div>
    </div>
   
   </>
)
} 


