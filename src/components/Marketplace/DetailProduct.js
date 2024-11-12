import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink,useSearchParams} from "react-router-dom"
import axios from 'axios'
import './Marketplace.css'
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Page/Navbar';
import Footer from '../Page/Footer';
import { Select } from "antd";


export default function DetailProduct({page}) {
 
    const [show, setShow] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState(null);

   const handleShow0 = () => {setShow(0); // Open the modal when the button is clicked
    };
    const handleShow1 = () => { setShow(1); // Close the modal
      };
      const handleImageClick = () => { 
        setIsModalOpen(true); // Open the modal when the button is clicked
      };
     
    
      const handleModalClose = () => {
        setIsModalOpen(false); // Close the modal
      }; 
   
   
  
   
  return(
    <>
   
   <div className="wrapper " >
        <div className=" ">
            <header id="header" className='header' >
               <div class="menu mr-70 ml-70 " >
                    <Navbar  />
                </div> 
		    </header>
        <div class="pt-130  mb-0 ">
        <div id="myModal" class="modal1" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <img   src={image} alt="logo" class="modal-content1" />
                <span className="close close-modal" onClick={handleModalClose}>&times; </span>
            </div>
                <div class="" style={{color:"white",background:"rgb(19, 16, 25)",textAlign:"left"}}>
                <section class=" "  >
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                           <ol className="breadcrumb m-0 " style={{backgroundColor:"transparent"}}>
                                <li className="breadcrumb-item theme-color" ><NavLink to="/" class="theme-color" style={{color:"#46CDD0"}}>Home</NavLink></li>
                                <li className="breadcrumb-item theme-color" ><NavLink to="/marketplace" class="theme-color" style={{color:"#46CDD0"}}>Marketplace</NavLink></li>
                                <li className="breadcrumb-item active text-white">Chicken Pasta</li>
                           </ol>
                        </div>
                        </div>
                        </div> 
                        </section> 
                        </div>  </div> 
                        
        <section class="productCard container" >
      
  <div class="container">
  
    <div class="colorLayer" ></div>
    <div class="preview" >
      <div class="imgs" >
        <img class="activ" src={require("../../assets/images/plat1.jpg")} alt="img 1" />
      
      </div>
      <div class="zoomControl" onClick={()=>{ setImage(require(`../../assets/images/plat1.jpg`));handleImageClick()}}></div>
      
    </div>
    <div class="info">
      <h3 class="name"><div class="projcard-textbox">
      <div class="projcard-subtitle"><div class="">
            <h2 class="mb-10 "  > <span class="theme-color" >How</span> it made</h2>
            <div class="projcard-bar"></div>

            <h4 class="theme-color mb-3" style={{fontWeight:"bold"}}  > Chicken Pasta</h4>
          </div> </div>
      <div class="projcard-description"><div class="tab">
          <ul class="nav nav-tabs" id="myTab" role="tablist" >
            <li class="nav-item">
              <a class={(show === 0) ? "nav-link active show" : "nav-link" }  onClick={() => {handleShow0()}} id="cleaning-tab" data-bs-toggle="tab"  role="tab" aria-controls="cleaning" aria-selected="true">Ingrédients</a>
            </li>
            <li class="nav-item">
              <a class={(show === 1) ? "nav-link active show" : "nav-link" }  id="extraction-tab" onClick={() => {handleShow1()}}  data-bs-toggle="tab"  role="tab" aria-controls="extraction" aria-selected="false">Préparation</a>
            </li>
           
          </ul>
          <div class="tab-content" id="myTabContent "  >
            <div class={(show === 0) ? "tab-pane  fade active show" : "tab-pane fade" } id="cleaning" role="tabpanel" aria-labelledby="cleaning-tab">
              <p class="">Dolorsit amet, consectetur adipisicing elit. Vero quod conseqt quibusdam. </p>
              <img src={require("../../assets/images/qrcode.jpg")} style={{height:"150px"}}  />

            </div>
            <div class={(show === 1) ? "tab-pane  fade active show" : "tab-pane fade" } id="extraction" role="tabpanel" aria-labelledby="extraction-tab">
            <p class="" >Dolorsit amet, consectetur adipisicing elit. Vero quod conseqt quibusdam. </p>
            <img src={require("../../assets/images/qrcode.jpg")} style={{height:"150px"}}  />            </div>
            
          </div>
        </div>
      </div>
     
    </div>
  </h3>
    
      <div class="attribs">
      
      
      </div>
      <div class="buttons">
        <div class="button">Add to cart</div>
        <div class="button colored">Buy now</div>
      </div>
    </div>
   
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
  

