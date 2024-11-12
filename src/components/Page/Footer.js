import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink} from "react-router-dom"
import axios from 'axios'
import './Index.css'
import { Modal, Button } from 'react-bootstrap';


export default function Footer({page}) {
  

 

  return(
    <>
    <section class="page-section-pb" style={{background:"rgb(37, 31, 50)"}} >
  <div class="container"  >
    <div class="row">
      <div class="col-12" >
        <div class="listing-search" style={{borderRadius:"12px",background:"#46CDD0"}}>
          <h6 class="lacks-heading d-none">Lacks Heading</h6>
          <div class="row">
            <div class="col-md-6 sm-mb-10" style={{textAlign:"left",fontSize:"36px"}}>
               <p class="text-white" style={{fontWeight:"bold"}}>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                   </p>         
                   </div>
                   <div class="col-md-2"> </div>
            <div class="col-md-4">
            <div class="input-container">
  <input type="text" placeholder="Enter your email address" class="form-control email-input" name="name" style={{borderRadius: "20px"}}/>
</div>
             <a class="button white mt-20" href="#" style={{fontWeight:"bold",borderRadius:"20px"}}>Subscribe to Newsletter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   <footer class="footer " style={{textAlign:"left",background:"rgb(37, 31, 50)"}}>
    
 <div class="">
 <div class="container">
  <div class="row">
  <div class="col-lg-3 col-md-6 col-sm-6 sm-mb-30">
      <div class="footer-logo">
        <h3 class="text-white">NFT</h3>
      </div>
       <div class="social-icons color-hover">
         <ul >
          <li class="social-facebook" ><a href="#"><i style={{color:"#46CDD0"}} class="fa fa-facebook"></i></a></li>
          <li class="social-twitter"><a href="#"><i style={{color:"#46CDD0"}} class="fa fa-twitter"></i></a></li>
          <li class="social-dribbble"><a href="#"><i style={{color:"#46CDD0"}} class="fa fa-dribbble"></i> </a></li>
          <li class="social-linkedin"><a href="#"><i  style={{color:"#46CDD0"}}class="fa fa-linkedin"></i> </a></li>
         </ul>
       </div>
  </div>
      <div class="col-lg-2 col-md-6 col-sm-6 sm-mb-30">
      <div class="footer-useful-link footer-hedding">
        <h6 class="text-white mb-30 mt-10 text-uppercase">Company</h6>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-2 col-md-6 col-sm-6 xs-mb-30">
      <div class="footer-useful-link footer-hedding">
        <h6 class="text-white mb-30 mt-10 text-uppercase">Help</h6>
        <ul>
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">Delivery Details</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-2 col-md-6 col-sm-6 xs-mb-30">
      <div class="footer-useful-link footer-hedding">
        <h6 class="text-white mb-30 mt-10 text-uppercase">FAQ</h6>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Manage Deliveries</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Payments</a></li>
        </ul>
      </div>
    </div><div class="col-lg-2 col-md-6 col-sm-6 xs-mb-30">
      <div class="footer-useful-link footer-hedding">
        <h6 class="text-white mb-30 mt-10 text-uppercase">Resources</h6>
        <ul>
          <li><a href="#">Free eBooks</a></li>
          <li><a href="#">Development Tutorial</a></li>
          <li><a href="#">How to - Blog</a></li>
          <li><a href="#">Youtube Playlist</a></li>
        </ul>
      </div>
    </div>
   </div>
     <div class="footer-widget mt-20">
    <div class="row">
      <div class="col-md-12 text-center">
        <p class="mt-15"> &copy;Copyright <span id="copyright"> {new Date().getFullYear()}</span> <a href="#"> NFT </a> All Rights Reserved </p>
      </div>
     </div>
    </div>
   </div>
  </div>
</footer>
<button class="back-to-top" onClick={() => {window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
      });}}  type="button"></button>   
   
   </>
)
} 

