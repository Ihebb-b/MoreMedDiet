import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink,useSearchParams} from "react-router-dom"
import axios from 'axios'
import './MyRecipes.css'
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Page/Navbar';
import Footer from '../Page/Footer';
import { Select } from "antd";
import Header from '../Page/Header';
import Sidebar from '../Page/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faHamburger, faPizzaSlice, faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faStar, faTrophy, faMedal, faCrown, faThumbsUp, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faBox, faReceipt, faClipboardList, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faUser, faUsers, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign, faCoins,  faChartLine, faChartBar,  faStore } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

export default function MyRecipes({page}) {
  const [currentDate, setCurrentDate] = useState({
    day: '',
    month: '',
    year: ''
  });

  useEffect(() => {
    const date = new Date();
    const day = date.getDate(); // Get day of the month (1-31)
    const month = date.toLocaleString('en-US', { month: 'long' }); // Get full month name in English
    const year = date.getFullYear(); // Get full year

    setCurrentDate({
      day,
      month,
      year
    });
  }, []);
  const [isOpen, setIsOpen] = useState(true);

  const toggleOppen = () => {
    setIsOpen(!isOpen);
  };
  
  return(
    <>
   
   <div className="wrapper backdash" >
   
   <Sidebar page="recipes"/>
  
  <div class="right"> 
   <div class="app-container">
  <div class="app-header">
    <div class="app-header-left">
    <p class="app-name" >NFT</p>

    </div>
    <div class="app-header-right">
      <Header />
    </div>
   
  </div>
  <div class="app-content">
   
    <div class="projects-section">
      <div class="projects-section-header">
        <p>Recipes</p>
        <p class="time">{currentDate.day} {currentDate.month}, {currentDate.year}</p>
      </div>
      <div class="projects-section-line">
        <div class="projects-status">
          <div class="item-status">
            <span class="status-number">9</span>
            <span class="status-type"> Total Recipes</span>
          </div>
          <div class="item-status">
            <span class="status-number">2</span>
            <span class="status-type">Best Recipes</span>
          </div>
          <div class="item-status">
           
          </div>
        </div>
        <div class="view-actions">
          <button class={`view-btn list-view ${isOpen ? 'active' : ''}`} onClick={toggleOppen } title="List View">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </button>
          <button class={`view-btn grid-view ${!isOpen ? 'active' : ''}`} onClick={toggleOppen }  title="Grid View">
          <FontAwesomeIcon icon={faTrophy} size="2x" />

          </button>
        </div>
      </div>
      <div class="project-boxes jsGridView">
        {isOpen&&
      <div class="container ">
              <div class="trending heading flex flex-sb mb-40 ">
                <h5 class="rating" ></h5>
                <p> <select class="form-select rating" aria-label="Default select example" style={{fontSize:"15px"}}>
  <option selected>By rating</option>
  <option value="1">Prix Ascendant </option>
  <option value="2">Prix Descendant</option>
</select></p>
              </div>


              

              <div class="mt-3">
              <ul class="product-list1 text-white-color" >
            <li class="product-item ">
              <div class="product-card3" tabindex="0">
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
                <a  class="h4 product-title" style={{color:"#46CDD0"}}>Chicken Pasta
                    </a></NavLink>

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

                        <p class="label text-white-color">@jackr</p>
                      </div>
                    </div>

                    <div class="product-price mt-2">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>

            <li class="product-item">
              <div class="product-card3" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat1.jpg")}
                   alt="Chicken Pasta"
                  />

                 

                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title" style={{color:"#46CDD0"}}
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

                        <p class="label text-white-color">@jackr</p>
                      </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>

            <li class="product-item">
              <div class="product-card3" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat2.jpg")}
                   alt="Chicken Pasta"
                  />

                  

                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title" style={{color:"#46CDD0"}}
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

                       <p class="label text-white-color">@jackr</p>
                     </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
            <li class="product-item">
              <div class="product-card3" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat.jpg")}
                   alt="Chicken Pasta"
                  />


                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title" style={{color:"#46CDD0"}}
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

                       <p class="label text-white-color" >@jackr</p>
                     </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
            <li class="product-item">
              <div class="product-card3" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat5.jpg")}
                   alt="Chicken Pasta"
                  />


                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title" style={{color:"#46CDD0"}}
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

                       <p class="label text-white-color">@jackr</p>
                     </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
            <li class="product-item">
              <div class="product-card3" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat4.jpg")}
                   alt="Chicken Pasta"
                  />


                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title" style={{color:"#46CDD0"}}
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

                       <p class="label text-white-color">@jackr</p>
                     </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
             
           

         
        
        </div>
      </div>}
      {!isOpen&&
      <div class="container ">
              <div class="trending heading flex flex-sb mb-40 ">
                <h5 class="rating" ></h5>
                <p> <select class="form-select rating" aria-label="Default select example" style={{fontSize:"15px"}}>
  <option selected>By rating</option>
  <option value="1">Prix Ascendant </option>
  <option value="2">Prix Descendant</option>
</select></p>
              </div>


              

              <div class="mt-3">
              <ul class="product-list1 text-white-color" >
            <li class="product-item ">
              <div class="product-card3" tabindex="0">
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
                <a  class="h4 product-title" style={{color:"#46CDD0"}}>Chicken Pasta
                    </a></NavLink>

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

                        <p class="label text-white-color">@jackr</p>
                      </div>
                    </div>

                    <div class="product-price mt-2">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>

           
            <li class="product-item">
              <div class="product-card3" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat.jpg")}
                   alt="Chicken Pasta"
                  />


                  <NavLink to="/detailProduct"> <button class="place-bid-btn">Show</button></NavLink>
                </figure>

                <div class="product-content">
                <NavLink to="/detailProduct"> 
                <a  class="h4 product-title" style={{color:"#46CDD0"}}
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

                       <p class="label text-white-color" >@jackr</p>
                     </div>
                    </div>

                    <div class="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p class="label">Current Bid</p>
                    </div>
                  </div>

                  <div class="product-footer">
                    <p class="total-bid text-white-color">12+ Place Bid.</p>

                    <button class="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
            
          </ul>
             
           

         
        
        </div>
      </div>}
  </div>
</div>
<div class="messages-section">
  <button class="messages-close">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" /></svg>
  </button>
  <div class="projects-section-header">
    <p>Client Messages</p>
  </div>
  <div class="messages" style={{textAlign:"left"}}>
    <div class="message-box">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image"/>
      <div class="message-content">
        <div class="message-header">
          <div class="name">Stephanie</div>
          <div class="star-checkbox">
            <input type="checkbox" id="star-1"/>
            <label for="star-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </label>
          </div>
        </div>
        <p class="message-line">
        This recipe was fantastic! The flavors were perfectly balanced, and the instructions were easy to follow. I'll definitely be making this again!
        </p>
        <p class="message-line time">
          June, 12
        </p>
      </div>
    </div>
    <div class="message-box">
      <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image"/>
      <div class="message-content">
        <div class="message-header">
          <div class="name">Mark</div>
          <div class="star-checkbox">
            <input type="checkbox" id="star-2"/>
            <label for="star-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </label>
          </div>
        </div>
        <p class="message-line">
        This recipe was a game-changer for me. It was delicious and gave me new ideas for my meal planning. Thank you for sharing!
        </p>
        <p class="message-line time">
          June, 12
        </p>
      </div>
    </div>
    <div class="message-box">
      <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image"/>
      <div class="message-content">
        <div class="message-header">
          <div class="name">David</div>
          <div class="star-checkbox">
            <input type="checkbox" id="star-3"/>
            <label for="star-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </label>
          </div>
        </div>
        <p class="message-line">
        I loved how quick and simple this dish was to prepare. It tasted amazing, and my family enjoyed it a lot. Highly recommend!        </p>
        <p class="message-line time">
          June, 12
        </p>
      </div>
    </div>
    <div class="message-box">
      <img src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image"/>
      <div class="message-content">
        <div class="message-header">
          <div class="name">Jessica</div>
          <div class="star-checkbox">
            <input type="checkbox" id="star-4"/>
            <label for="star-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </label>
          </div>
        </div>
        <p class="message-line">
        I wasn’t sure about this recipe at first, but it turned out to be a delightful surprise. The flavors were rich, and it was a crowd-pleaser at our gathering.        </p>
        <p class="message-line time">
          June, 11
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    </div>
    </div>
  
   </>
)
} 

  

