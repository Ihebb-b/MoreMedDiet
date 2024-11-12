import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink,useSearchParams} from "react-router-dom"
import axios from 'axios'
import './Marketplace.css'
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Page/Navbar';
import Footer from '../Page/Footer';
import { Select } from "antd";


export default function Marketplace({page}) {
  const customStyles = {
    option: (provided, state) => ({
      backgroundColor: state.isFocused ? '#43B58C' : '#F0F0F0',
      color: state.isFocused ? '#FFFFFF' : '#999999',
      padding: 10,
    }),
    control: (provided) => ({
      width: 200,
      border: '1px solid #ccc',
    }),
  };
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [value, setValue] =useState([]);
    
    const [checked, setChecked] = useState([]);
    const [checked1, setChecked1] = useState([]);
    const [categories, setCategories] = useState([]);
    const [zones, setZones] = useState([]);
    const [pays, setPays] = useState([]);
    const [entreprises, setEntreprises] = useState([]);
    const [checkedPromotion, setCheckedPromotion] = useState(false);
    const [checkedcat, setCheckedcateg] = useState(false);
    const [checkedDispo, setCheckedDispo] = useState([]);
    const [search, setSearch] = useState("");
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);
    const [typologie, setTypologie] = useState("");
    const [methodedecapture, setMethodedecapture] = useState("");
    const [zonedepeche, setZonedepeche] = useState("");
    const [transformation, setTransformation] = useState("");
    const [certification, setCertification] = useState("");
    const [trier, setTrier] = useState("");
    const [country, setCountry] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [categorie, setCategorie] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [checkList, setCheckList] = useState([]);
    const [checkList1, setCheckList1] = useState(["oui", "non"]);
    const [priceChanged, setPriceChanged] = useState(false);
    const [priceTri, setPriceTri] = useState("no");
    const [filteredDataLoading, setfilteredDataLoading] = useState(true);
    const [filterStateMarketplace, setFilterStateMarketplace] = useState(true);
    const [var1, setVar1] = useState(false);
    const [var2, setVar2] = useState(false);
    const [var3, setVar3] = useState(false);
    
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [playOnce, setPlayOnce] = useState(false);
  
    const [testLanguage, setTestLanguage] = useState(false);
  
      const handleImageClick = () => {setIsModalOpen(true); // Open the modal when the button is clicked
    };
    
      const handleModalClose = () => { setIsModalOpen(false); // Close the modal
      };
    
   
   
  
    const triers=   [ 
      { "value": 0,
        "label": "Prix Assendant"
      },
      {        
        "value": 1,
        "label": "Prix Descendant"
    },]
  
  const types=   [
    {    
        "value": "type1",
        "label": "type1"
    },
    {      
        "value": "type2",
        "label": "type2"
    },
    {     
      "value": "type3",
      "label": "type3"
  },]
  
  const coupages=   [
    {    
        "value": "type1",
        "label": "type1"
    },
    {      
        "value": "type2",
        "label": "type2"
    },
    {      
      "value": "type3",
      "label": "type3"
  },]
  
  const typologies=   [    
    "pêche artisanale",
    "Pêche industrielle",
    "aquaculture /élevage",
    "autres"];
  
  const captures=   [ 
    "scène",
    "Chalutage (chalut de fond, Chalut pélagique)",
    "Filet maillant",
    "filets similaires (Trémails)",
    "Pêche à la ligne (Plangres, Poteau et ligne)",
    "Récolte des mollusques et crustacés (Draguer, Pièges et pots)",
    "Plongée",
    "Cultivé en mer",
    "Aquaculture / élevage (sur terre)",
    "autres"];
  
  const conservations=   [ 
    "Conserver entre -8 et +25C",
    "La mise sous glace",
    "Placez les produits au plus vite au frais",
    "Séparez les produits",
    "Mettez les produits dans des emballages hermétiques",
    "Maintenez l’humidité pour les produits vivants"];
  
  const transformations=   [ 
    "en état (poisson entier)",
    "congélé",
    "fumé",
    "salé",
    "semi-conservés",
    "pasteurisés",
    "séché",
    "autres"];
  
  const congelations=   [
    "BQF(Block Quick Frozen)",
    "IQF(Individually Quick Frozen)",
    "Bloc surgelé",
    "Congelé à bord"];
  
  const certifications=   [ 
    "GMP",
    "BRC",
    "IFS",
    "ISO",
    "HACCP",
    "QS",
    "autres"];
  
  const emballages=   [
    "Emballage sous vide",
    "vrac",
    "sac",
    "boîte en carton avec doublure en polyéthylène",
    "boîte en plastique",
    "filets",
    "bois",
    "sans emballage",
    "autres"];
  
  
    const filterPromotion = (array) => {
      if (checked1.length == 1) {
        if (checked1[0] == "oui") {
          return array.filter((item) => item.discount != null);
        }
        if (checked1[0] == "non") {
          return array.filter((item) => item.discount == null);
        }
      }
      if (checked1.length == 2) {
        return array;
      }
      return array;
    };
  
    const filterPrix = (array) => {
  
      if (priceChanged) {
  
        return array.filter(
  
          (item) => item.prix >= value[0] && item.prix <= value[1]
         
        );
  
      } else {
        return array;
      }
    };
   
  
  
    const filterPays = (array) => {
      if (country!="") {
        let newArray = [];
        array.forEach((item) => {
          
            if (item.user.entreprise.pays == country) {
              newArray.push(item);
            
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
  
  
    const filterEntreprise = (array) => {
  
      if (entreprise!="") {
        let newArray = [];
        array.forEach((item) => {
            if (item.user.entreprise.nom == entreprise) {
              newArray.push(item);
            
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
  
    const filterTypologie = (array) => {
  
      if (typologie!="") {
        let newArray = [];
        array.forEach((item) => {
          
            if (item.typologie == typologie) {
              newArray.push(item);
            
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
    const filterZone = (array) => {
      if (zonedepeche!="") {
        let newArray = [];
        array.forEach((item) => {      
            if (item.zonedepeche == zonedepeche) {
              newArray.push(item);          
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
    const filterMethode = (array) => {
  
      if (methodedecapture!="") {
        let newArray = [];
        array.forEach((item) => {
          
            if (item.methodedecapture == methodedecapture) {
              newArray.push(item);         
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
    const filterTransformation = (array) => {
      if (transformation!="") {
        let newArray = [];
        array.forEach((item) => {       
            if (item.transformation == transformation) {
              newArray.push(item);         
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
    const filterCertifcation = (array) => {
      if (certification!="") {
        let newArray = [];
        array.forEach((item) => {       
            if (item.certification == certification) {
              newArray.push(item);          
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
    const filterCategories = (array) => {
      if (categorie!="") {
        let newArray = [];
        array.forEach((item) => {     
            if (item.categorie.nom == categorie) {
              newArray.push(item);          
          }
        });
        return newArray;
      } else {
        return array;
      }
    };
  
    const onChangeOrder=(value)=>{
     if(value==0){
      SortAsc()
      setPriceTri("asc");
  setCurrentPage(1)
     }else{
      SortDesc()
      setPriceTri("desc");
      setCurrentPage(1)
  
   } }
  
   const SortDesc=()=>{
     filteredData.sort((a, b) => b.prix - a.prix);
     data.sort((a, b) => b.prix - a.prix);
  
   }
  
   const SortAsc=()=>{
    filteredData.sort((a, b) => a.prix - b.prix);
    data.sort((a, b) => a.prix - b.prix);
  
  }
  
    const allFilters = () => {
      //Filter options updated so apply all filters here
      let result = data;
    
      result = filterCertifcation(result);
      result = filterTransformation(result);
      result = filterMethode(result);
      result = filterZone(result);
      result = filterTypologie(result);
      result = filterPrix(result);
      result = filterCategories(result);
      result = filterPromotion(result);
      result = filterPays(result);
      result = filterEntreprise(result);
      
      if (searchTerm !== "") {
        result = result.filter(item =>
          item.nom.toLowerCase().includes(searchTerm.toLowerCase())||item.description.toLowerCase().includes(searchTerm.toLowerCase())
  
        );
      }
      setFilteredData(result);
  setCurrentPage(1)
    };
    useEffect(() => {
      allFilters();
    }, [searchTerm,value,priceChanged,categorie,checkedPromotion,priceMin,priceMax,entreprise,country,typologie,zonedepeche,methodedecapture,transformation,certification]);
  
    const clear = () => {
      setFilteredData(data);
      setChecked1([]);
      setChecked([]);
      setValue([priceMin, priceMax]);
      setCheckedPromotion(false);
      setCheckedcateg(false);
      setPriceChanged(false);
      setCategorie("");
      setEntreprise("");
      setZonedepeche("");
      setCertification("");
      setMethodedecapture("");
      setTransformation("");
      setTypologie("");
      setCountry("");
    };
   
  
   
  
    const handleSearch = event => {
      setSearchTerm(event.target.value);
      setCurrentPage(1); // Reset to first page when searching
    };
  
    const handlePageChange = pageNumber => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
  return(
    <>
   
   <div className="wrapper " >
        <div className=" ">
            <header id="header" className='header' >
               <div class="menu mr-70 ml-70 " >
                    <Navbar page="marketplace" />
                </div> 
		    </header>
        <main>
    <article>
    <section class="hero1 mb-70" >


         <div class="dashboard-content">
     
     
      <div class="">
         

         
       
        <div class="section ">
          
          <div class="section-left">
           
            <div class="banner flex1 flex-sb">
              
              <div class="text ">
                <h2 style={{color:"white"}}>
                Browse Marketplace<br /><br />
                </h2>

                
                
             
              <div id="search-wrapper1" class='mb-4'>


<i class="search-icon fa fa-search"></i>

<input type="text" class="placeholder " id="search" placeholder="Search..."  value={searchTerm} style={{width:"32%"}}
                      onChange={handleSearch} />


</div> 
<div class="" style={{margin:"auto 110px"}}>
                              <div class="row ">
                              <div class="col-lg-4 col-xd-12">
                              <select class="form-select" aria-label="Default select example">
  <option selected>Par plat</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                              </div>
                              <div class="col-lg-4 col-xd-12">
                              <select class="form-select" aria-label="Default select example">
  <option selected>Par restaurant</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                              </div>
                              <div class="col-lg-4 col-xd-12">
                              <select class="form-select" aria-label="Default select example">
  <option selected>Par chef</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                              </div></div>
                              </div>            
              </div>
              

            </div>

            <div class="container mt-40 ">
              <div class="trending heading flex flex-sb  ">
                <h5 class="text-white" >Selected Products : <span class="theme-color">6</span></h5>
                <p> <select class="form-select" aria-label="Default select example" style={{fontSize:"15px"}}>
  <option selected>By rating</option>
  <option value="1">Prix Ascendant </option>
  <option value="2">Prix Descendant</option>
</select></p>
              </div>


              

              <div class="mt-3">
              <ul class="product-list1">
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
                    >Chicken Pasta
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
            </div>
          </div>

         
        
        </div>
      </div>
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
  

