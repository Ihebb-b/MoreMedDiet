import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink,useSearchParams} from "react-router-dom"
import axios from 'axios'
import './Profile.css'
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Page/Navbar';
import Footer from '../Page/Footer';
import { Select } from "antd";


export default function Profile({page}) {
 
  
   
  
   
  return(
    <>
   
   <div className="wrapper " >
        <div className=" ">
            <header id="header" className='header' >
               <div class="menu mr-70 ml-70 " >
                    <Navbar page="profile" />
                </div> 
		    </header>
       
       
<section class=" page-section-ptb bg-overlay-black-80 jarallax background-user" data-speed="0.6" data-img-src="images/bg/06.jpg">
 <div class="container mt-5" >
  <div class="row ">
      <div class="col-md-10">
        <div class="section-title " style={{textAlign:"left"}}>
          <h6 class="text-white">Profile User</h6>
          <h2 class="text-white  mb-4">User User</h2>
          
        
          <span class="text-white"> 
            <a href="" class="text-white" ><i class="fa fa-globe font-size-40" style={{color:"#ccc",marginRight:10,fontSize:18}}></i>
              hi.tn      
            </a> 
          </span>
            <span class="text-white"> <i class="fa fa-phone" style={{fontSize:"15px",marginLeft:"30px"}}></i>
              <span class="" data-to="4905" data-speed="10000" style={{fontSize:"15px",marginRight:"30px"}}> xxxxxxxx
              </span>
            </span>
              <span class="text-white"> <i class="fa  fa-mobile" style={{fontSize:"15px",marginLeft:"30px"}}></i>
                <span class="" data-to="4905" data-speed="10000" style={{fontSize:"15px",marginRight:"30px"}}> xxxxxxxx
                </span>
              </span>
              <span class="text-white"> <i class="fa  fa-envelope" style={{fontSize:"15px",marginLeft:"30px"}}></i>
                <span class="" data-to="4905" data-speed="10000" style={{fontSize:"15px",marginRight:"30px"}}> user@gmail.com
                </span>
              </span>
        </div>
      </div>
    </div>
  </div>
  
</section>

<section class="secrvice-blog ">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12 ">
        <div class="card border-0  box-content o-hidden h-100" style={{color:"white",width:"190px"}}>
        <img id="logo_img"   src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/bidding-user.png"
 alt="logo" style={{height:"135px",}}/>
                  
             <NavLink  className="button button1-border white "    style={{padding:"7px 7px"}} >Update Profile</NavLink>
         
         
        </div>
      </div>
      </div>
     
  </div>
</section>

<section class="mb-150" >
        <div class="container1 container " >
          <div class="section-header-wrapper mt-70">
            <h2 class="h2 section-title">My Recipes</h2>

            <NavLink to="/marketplace"><button class="btn btn-primary">View all</button></NavLink>
          </div>

          <ul class="product-list">
            <li class="product-item">
              <div class="product-card" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat3.jpg")}
                    alt="Chicken Pasta"
                  />

                   {/*<div class="product-actions">
                    <button class="">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button class="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div> */}

                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title"
                    >Chicken Pasta</a
                  ></NavLink>

                  <div class="product-meta">
                    <div class="product-author">
                      <figure class="author-img">
                        <img
                          src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/bidding-user.png"
                          alt="Jack Reacher"
                        />
                      </figure>

                      <div class="author-content mt-2">
                       
                        <data value="Jack R">Jack R</data>

                        <p class="label">@jackr</p>
                      </div>
                    </div>

                    <div class="product-price mt-2">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat1.jpg")}
                   alt="Chicken Pasta"
                  />

                 

                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title"
                    >Chicken Pasta</a
                  ></NavLink>

                  <div class="product-meta">
                    <div class="product-author">
                      <figure class="author-img">
                        <img
                          src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/bidding-user.png"
                          alt="Jack Reacher"
                        />
                      </figure>

                      <div class="author-content mt-2">
                       
                        <data value="Jack R">Jack R</data>

                        <p class="label">@jackr</p>
                      </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat2.jpg")}
                   alt="Chicken Pasta"
                  />

                  

                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title"
                    >Chicken Pasta</a
                  ></NavLink>

                  <div class="product-meta">
                    <div class="product-author">
                      <figure class="author-img">
                        <img
                          src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/bidding-user.png"
                          alt="Jack Reacher"
                        />
                      </figure>

                      <div class="author-content mt-2">
                       
                       <data value="Jack R">Jack R</data>

                       <p class="label">@jackr</p>
                     </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat4.jpg")}
                   alt="Chicken Pasta"
                  />


                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title"
                    >Chicken Pasta</a
                  ></NavLink>

                  <div class="product-meta">
                    <div class="product-author">
                      <figure class="author-img">
                        <img
                          src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/bidding-user.png"
                          alt="Jack Reacher"
                        />
                      </figure>

                      <div class="author-content mt-2">
                       
                       <data value="Jack R">Jack R</data>

                       <p class="label">@jackr</p>
                     </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
       
          
                    <Footer/>
                </div>
            </div>
       
   
   </>
)
} 
const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div >
         <ul className="pagination">
          {/* Bouton "Précédent" */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
    <a
      onClick={() => onPageChange(currentPage - 1)}
      style={{ cursor: "pointer", pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
      className="page-link"
    >
      &lt;
    </a>
  </li>
  
  
          {/* Numéros de page */}
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a
                onClick={() => onPageChange(number)}
                style={{ cursor: "pointer" }}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
  
          {/* Bouton "Suivant" */}
          <li className={`page-item ${currentPage === Math.ceil(totalItems / itemsPerPage) ? 'disabled' : ''}`}>
    <a
              onClick={() => onPageChange(currentPage + 1)}
              style={{ cursor: "pointer", pointerEvents: currentPage === Math.ceil(totalItems / itemsPerPage) ? 'none' : 'auto' }}
      className="page-link"
    >
      &gt;
    </a>
  </li>
        </ul>
      </div>
    );
  };
  

