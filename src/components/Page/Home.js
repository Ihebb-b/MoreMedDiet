
import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink} from "react-router-dom"
import axios from 'axios'

import './Index.css';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Home() {
 
  const [inscription, setInscription] = useState(false);
  return(
  
<>
<div className="wrapper " style={{background:"black"}}>
      <div className=" ">
       <header id="header" className='header' >
       <div class="menu mr-70 ml-70 " >
      <Navbar page="home" inscription={inscription}/></div> 
		</header>
   
    <main>
    <article>
     

      <section class="hero" >
      <div
    style={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    height:"695px",
      background: `url(${require("../../assets/images/backgound.png")})`,
      backgroundSize: "cover",
      opacity: 0.6, // Ajustez l'opacité selon vos besoins
    }}
  ></div>
        <div class="container1 container">
          <div class="hero-content">
            <h1 class="h1 hero-title">
           <span>Culinary Delights </span>
            </h1>

            <p class="hero-text " >
            Welcome to our Marketplace-NFT! Discover, promote, and sell original and unpublished Mediterranean recipes. Our platform allows you to explore unique culinary creations and support talented chefs. Join us in celebrating the rich flavors of the Mediterranean and bring home a piece of its culinary heritage.
            </p>

            <div class="btn-group">
              <button class="btn btn-primary">Explore more</button>

            </div>
            <div class="row mt-30" style={{fontSize:"16px"}}>
     <div class="col-lg-4 col-md-6 col-sm-6 sm-mb-30" >
       <div class="counter text-white">
        <span class="timer" data-to="4905" data-speed="10000">200+</span>
        <label>INTERNATIONAL CHEFS</label>
      </div>
      </div>
     <div class="col-lg-4 col-md-6 col-sm-6 sm-mb-30">
     <div class="counter text-white">
        <span class="timer" data-to="3750" data-speed="10000">2000+</span>
        <label>HIGH-QUALITY PRODUCTS</label>
      </div>
     </div>
     <div class="col-lg-4 col-md-6 col-sm-6 xs-mb-30">
    <div class="counter text-white">
        <span class="timer" data-to="4782" data-speed="10000">30000+</span>
        <label>HAPPY CUSTOMERS</label>
      </div>
     </div>
    
  </div>
          </div>
          <div class="gallery">
	<div class="images">
		<img src={require("../../assets/images/plat1.jpg")} alt="image"/>
	</div>
	<div class="images">
		<img src={require("../../assets/images/background1.jpg")} alt="image"/>
	</div>
	<div class="images">
		<img src={require("../../assets/images/plat2.jpg")} alt="image"/>
	</div>
	<div class="images">
		<img src={require("../../assets/images/plat3.jpg")} alt="image"/>
	</div>
	<div class="images">
		<img src={require("../../assets/images/plat4.jpg")} alt="image"/>
	</div>
	<div class="images">
		<img src={require("../../assets/images/plat5.jpg")} alt="image"/>
	</div>
</div>
       
        </div>
      </section>

    

      <section class="new-product" >
        <div class="container1 container " >
          <div class="section-header-wrapper">
            <h2 class="h2 section-title">Newest Items</h2>

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

     

      <section class="about">
        <div class="container1 container2">
      <h2 class="h2 about-title"><span class="theme-color"> WALLETS</span> WE SUPPORT </h2>
          <ol class="about-list">
            <li class="about-item">
              <div class="about-card">
                <div class="card-number">01</div>

                <div class="card-icon">
                  <img
                    src={require("../../assets/images/metamask.png")}     
                                   alt="wallet icon"
                  />
                </div>

                <h3 class="h3 about-card-title">Metamask</h3>

               
              </div>
            </li>

            <li class="about-item">
              <div class="about-card">
                <div class="card-number">02</div>

                <div class="card-icon">
                  <img
src={require("../../assets/images/binance.png")}               
     alt="collection icon"
                  />
                </div>

                <h3 class="h3 about-card-title">Binance</h3>

               
              </div>
            </li>

            <li class="about-item">
              <div class="about-card">
                <div class="card-number">03</div>

                <div class="card-icon">
                  <img
src={require("../../assets/images/wallet.png")}               
     alt="folder icon"
                  />
                </div>

                <h3 class="h3 about-card-title">Trust Wallet</h3>

               
              </div>
            </li>

            <li class="about-item">
              <div class="about-card">
                <div class="card-number">04</div>

                <div class="card-icon">
                  <img
                    src={require("../../assets/images/alpha.png")}
                    alt="diamond icon"
                  />
                </div>

                <h3 class="h3 about-card-title">Alpha</h3>

               
              </div>
            </li>

            <li class="about-item">
              <div class="about-card">
                <div class="card-number">05</div>

                <div class="card-icon">
                  <img
                    src={require("../../assets/images/CG.png")}
                    alt="diamond icon"
                  />
                </div>

                <h3 class="h3 about-card-title">CoinGecko</h3>

               
              </div>
            </li>
          </ol>
        </div>
      </section>

     

      <section class="explore-product">
        <div class="container1 container">
          <div class="section-header-wrapper">
            <h2 class="h2 section-title">Explore Product</h2>

            <NavLink to="/marketplace"><button class="btn btn-primary">Explore</button></NavLink> 
          </div>

          <ul class="product-list">
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
                   src={require("../../assets/images/plat3.jpg")}
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

            <li class="product-item">
              <div class="product-card" tabindex="0">
                <figure class="product-banner">
                  <img
                   src={require("../../assets/images/plat5.jpg")}
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
                   src={require("../../assets/images/plat.jpg")}
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
          </ul>
        </div>
      </section>

      

      <section class="top-seller">
        <div class="container1 container">
          <h2 class="h2 top-seller-title">
            Top seller in <span>1</span> day
            <ion-icon name="chevron-down"></ion-icon>
          </h2>

          <ol class="top-seller-list">
            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">01</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-01.png"
                    alt="Brodband"
                  />

                  <div class="avatar-badge">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Brodband</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">02</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-02.png"
                    alt="Alexander"
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Alexander</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">03</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-03.png"
                    alt="William Jeck"
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">William Jeck</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">04</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-04.png"
                    alt="Henry Jhon"
                  />

                  <div class="avatar-badge">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Henry Jhon</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">05</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-05.png"
                    alt="James Thomas"
                  />

                  <div class="avatar-badge">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">James Thomas</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">06</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-06.png"
                    alt="Anthony Roy"
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Anthony Roy</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">07</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-07.png"
                    alt="Chritopher"
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Chritopher</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">08</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-08.png"
                    alt="Elijabeth Ran"
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Elijabeth Ran</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">09</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-01.png"
                    alt="Brodband HR"
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Brodband HR</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">10</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-02.png"
                    alt="Michel Raw"
                  />

                  <div class="avatar-badge">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Michel Raw</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">11</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-03.png"
                    alt="Liam Dylan"
                  />

                  <div class="avatar-badge">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Liam Dylan</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>

            <li class="top-seller-item">
              <a href="#" class="top-seller-card">
                <div class="card-number">12</div>

                <figure class="card-avatar">
                  <img
                    src="https://raw.githubusercontent.com/codewithsadee/naft-nft_marketplace/master/assets/images/seller-04.png"
                    alt="Thomas Jar"
                  />
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Thomas Jar</h3>

                  <data value="2500000">$2500,000</data>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </section>
    </article>
  </main>
  


<Footer />
<button class="back-to-top" onClick={() => {window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
      });}}  type="button"></button>
    </div> </div> 
</>




)

}