import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";

import "./Index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGetAllSuggestionsQuery } from "../../slices/searchApiSlice";
import mapImage from '../../assets/images/map.png';
import StateStatisticsChart from "./charts/StateStatisticsChart";
import EatingHabitsChart from "./charts/EatingHabitsChart";

export default function Home() {
  const [inscription, setInscription] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const {
    data: allSuggestions,
    isLoading,
    error,
  } = useGetAllSuggestionsQuery();
  const navigate = useNavigate();
  const inputRef = useRef();
  const [countryStats, setCountryStats] = useState(null);
  const [selectedState, setSelectedState] = useState(null);


  // const onMarkerClick = (country) => {
  //   console.log(`Marker for ${country} clicked`);
  //   setSelectedCountry(country); // Update the selected country state
  // };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  useEffect(() => {
    if (searchQuery.trim() && allSuggestions) {
      const combinedSuggestions = [
        ...(allSuggestions.name || []),
        ...(allSuggestions.gender || []),
        ...(allSuggestions.state || []),
        ...(allSuggestions.ville || []),
        ...(allSuggestions.country || []),
        ...(allSuggestions.height || []),
        ...(allSuggestions.weight || []),
        ...(allSuggestions.education || []),
        ...(allSuggestions.occupation || []),
        ...(allSuggestions.salary || []),
        ...(allSuggestions.currency || []),
        ...(allSuggestions.socialStatus || []),
        ...(allSuggestions.diet || []),
        ...(allSuggestions.meat || []),
        ...(allSuggestions.fruit || []),
        ...(allSuggestions.fruitUnitPerDay || []),
        ...(allSuggestions.vegetable || []),
        ...(allSuggestions.vegetableUnitPerDay || []),
        ...(allSuggestions.religious || []),
        ...(allSuggestions.fish || []),
        ...(allSuggestions.dairy || []),
        ...(allSuggestions.oil || []),
        ...(allSuggestions.homeMade || []),
        ...(allSuggestions.ordered || []),
        ...(allSuggestions.medicalHistory || []),
      ];

      const filtered = combinedSuggestions.filter((suggestion) => {
        if (typeof suggestion === "string") {
          return suggestion.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      });

      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [searchQuery, allSuggestions]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setTimeout(() => {
      setFilteredSuggestions([]);
      inputRef.current.blur();
    }, 0);
  };

  // Function to fetch statistics for a selected country
  // const fetchCountryStats = async (countryCode) => {
  //   try {
  //     // Fetch data from your API using the country code
  //     const response = await fetch(`/api/stats?country=${countryCode}`);
  //     const data = await response.json();
  //     setCountryStats(data);
  //   } catch (error) {
  //     console.error('Error fetching country statistics:', error);
  //   }
  // };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    } else {
      console.log("Search query is empty");
    }
  };


  return (
    <>
      <div className="wrapper " style={{ background: "black" }}>
        <div className=" ">
          <header id="header" className="header">
            <div class="menu mr-70 ml-70 ">
              <Navbar page="home" inscription={inscription} />
            </div>
          </header>

          <main>
            <article>
              {/* Hero and Search Bar Section */}
              <section class="hero">
                <div
                  style={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "695px",
                    background: `url(${require("../../assets/images/chartsBackground2.jpg")})`,
                    backgroundSize: "cover",
                    opacity: 0.8, // Ajustez l'opacité selon vos besoins
                  }}
                ></div>

                <div class="container1 container">
                  <div class="hero-content ">
                    <h1 class="h1 hero-title">
                      <span>MM.Diet Statistics Observatory </span>
                    </h1>

                    <p class="hero-text ">
                      Search and explore diet-related statistics across various
                      demographics.
                    </p>

                    {/* Search bar and button with enhanced styling */}
                    <div className="d-flex mb-4">
                      <div className="relative w-full max-w-3xl">
                        <i className="search-icon fa fa-search position-absolute left-3 top-1/2 transform -translate-y-1/2 "
                          style={{
                            top: "67%",
                          }}></i>
                        <input
                          type="text"
                          className="input-search-size  py-2 pl-30 pr-4 border rounded border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring focus:ring-gray-500 text-gray-700"
                          placeholder="Enter your search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          ref={inputRef}
                        />
                        {filteredSuggestions.length > 0 && (
                          <div
                            className="suggestions-dropdown position-absolute left-3 top-1/2 transform -translate-y-1/2"
                            style={{
                              width: "400px",
                            }}
                          >
                            {filteredSuggestions.map((suggestion, index) => (
                              <div
                                key={index}
                                className="suggestion-item"
                                onClick={() =>
                                  handleSuggestionClick(suggestion)
                                }
                              >
                                {suggestion}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        className="custom-btn  right-1 top-2/2 transform -translate-y-1/2 py-2 px-4 bg-gray-600 rounded text-white shadow hover:bg-indigo-700 transition duration-300"
                        onClick={handleSearch}
                        style={{
                          height: "38.5px",
                          width: "130px",

                        }}
                      >
                        Search
                      </button>


                    </div>

                    {/* <div class="btn-group">
                      <button class="btn btn-primary">Explore more</button>
                    </div> */}
                    <div className="mt-10  flex flex-wrap justify-center gap-2">
                      {[
                        "Sport practicing",
                        "Healthiest foods",
                        "Pizza consumed",
                        "Climate and foods",
                        "Gender distrubution",
                        "Traditional foods",
                      ].map((filter, index) => (
                        <button
                          key={index}
                          className="custom-btn text-white rounded transition duration-300"
                          style={{
                            height: "40px",


                          }}

                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div class="gallery">
                    <div class="images">
                      <img
                        src={require("../../assets/images/diet6.jpg")}
                        alt="image"
                        style={{
                          width: "80px",
                          maxHeight: "200px",
                          borderRadius: "10px",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </div>
                    <div class="images">
                      <img
                        src={require("../../assets/images/diet2.jpg")}
                        alt="image"
                      />
                    </div>
                    <div class="images">
                      <img
                        src={require("../../assets/images/diet1.jpg")}
                        alt="image"
                      />
                    </div>
                    <div class="images">
                      <img
                        src={require("../../assets/images/diet3.jpg")}
                        alt="image"
                      />
                    </div>
                    <div class="images">
                      <img
                        src={require("../../assets/images/diet4.jpg")}
                        alt="image"
                      />
                    </div>
                    <div class="images">
                      <img
                        src={require("../../assets/images/diet5.jpg")}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </section>


              {/*  Most Viwed meals Section */}
              <section class="new-product">
                <div class="container1 container ">
                  <div class="section-header-wrapper">
                    <h2 class="h2 section-title">Most viewed traditional meals</h2>

                    <NavLink to="/marketplace">
                      <button class="btn btn-primary">View all</button>
                    </NavLink>
                  </div>

                  <ul class="product-list">
                    <li class="product-item">
                      <div class="product-card" tabindex="0">
                        <figure class="product-banner">
                          <img
                            src={require("../../assets/images/couscous.jpg")}
                            alt="Couscous"
                          />

                          {/*<div class="product-actions">
                    <button class="">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button class="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div> */}

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">

                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Couscous</a>
                          </NavLink>

                          <div class="product-meta">
                            <div class="mt-2 text">
                              <p style={{ color: "white" }} >The percentage of medeterranian consumption of this item is</p>
                            </div>
                          </div>
                          <div class="product-footer">
                            <p class="total-bid">15%</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="product-item">
                      <div class="product-card" tabindex="0">
                        <figure class="product-banner">
                          <img
                            src={require("../../assets/images/harira.jpg")}
                            alt="Harira"
                          />

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Harira</a>
                          </NavLink>

                          <div class="product-meta">
                            <div class="mt-2 text">
                              <p style={{ color: "white" }} >The percentage of medeterranian consumption of this item is</p>
                            </div>
                          </div>

                          <div class="product-footer">
                            <p class="total-bid">20%</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="product-item">
                      <div class="product-card" tabindex="0">
                        <figure class="product-banner">
                          <img
                            src={require("../../assets/images/kofte.jpg")}
                            alt="Kofte"
                          />

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Kofte</a>
                          </NavLink>

                          <div class="product-meta">
                            <div class="mt-2 text">
                              <p style={{ color: "white" }} >The percentage of medeterranian consumption of this item is</p>
                            </div>
                          </div>


                          <div class="product-footer">
                            <p class="total-bid">30%</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="product-item">
                      <div class="product-card" tabindex="0">
                        <figure class="product-banner">
                          <img
                            src={require("../../assets/images/shakshouka.jpg")}
                            alt="Shakshouka"
                          />

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Shakshouka</a>
                          </NavLink>

                          <div class="product-meta">
                            <div class="mt-2 text">
                              <p style={{ color: "white" }} >The percentage of medeterranian consumption of this item is</p>
                            </div>
                          </div>

                          <div class="product-footer">
                            <p class="total-bid">25%</p>

                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Map Section */}

              <section className="about">
                <div className="container1 container">
                  <div className="section-header-wrapper">
                    <h2 className="h2 section-title">Participants Percentage</h2>
                  </div>

                  <div className="about-content" style={{ display: "flex", gap: "20px" }}>
                    {/* Map Container */}
                    <div
                      className="about-card"
                      style={{
                        flex: "2",
                        position: "relative",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                        overflow: "hidden",
                        opacity: "0.95",
                      }}
                    >
                      <img
                        src={mapImage}
                        alt="World Map"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                        className="zoomable-image"
                      />

                      <button
                        onClick={() => handleStateClick("Morocco")}
                        style={{ position: "absolute", top: "44%", left: "44%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Morocco</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Algeria")}
                        style={{ position: "absolute", top: "45%", left: "47%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Algeria</span>
                      </button>
                      <button
                        onClick={() => handleStateClick("Tunisia")}
                        style={{ position: "absolute", top: "42%", left: "48%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Tunisia</span>

                      </button>


                      <button
                        onClick={() => handleStateClick("Libya")}
                        style={{ position: "absolute", top: "46%", left: "51%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Libya</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Egypt")}
                        style={{ position: "absolute", top: "48%", left: "55%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Egypt</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Palestine")}
                        style={{ position: "absolute", top: "47.2%", left: "59%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Palestine</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Syria")}
                        style={{ position: "absolute", top: "43.3%", left: "60.5%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Syria</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Turkey")}
                        style={{ position: "absolute", top: "39%", left: "58%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Turkey</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Greece")}
                        style={{ position: "absolute", top: "40%", left: "54.5%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Greece</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Italy")}
                        style={{ position: "absolute", top: "40.3%", left: "51%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Italy</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("France")}
                        style={{ position: "absolute", top: "39%", left: "48%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">France</span>

                      </button>

                      <button
                        onClick={() => handleStateClick("Spain")}
                        style={{ position: "absolute", top: "39%", left: "44%" }}
                        className="marker-button"
                      >
                        <span className="tooltip">Spain</span>

                      </button>

                    </div>



                    {/* Chart Component */}
                    <div
                      className="chart-container"
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        //justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "8px",
                        padding: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        opacity: "0.95",
                      }}
                    >
                      {/* <h2 className="chart-title" style={{ marginBottom: "20px", marginTop: "20px", fontSize: "1.3rem", fontWeight: "bold" }}>
                      Statistics of Participants from {selectedState || "Select a State"} 
                        </h2>
                      <StateStatisticsChart selectedState={selectedState} /> */}
                      <h3
                        className="chart-title"
                        style={{
                          marginTop: "20px",
                          marginBottom: "50px",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          color: "#333",
                        }}
                      >
                        {selectedState
                          ? `Statistics for Participants in ${selectedState}`
                          : "Select a State to View Statistics"}
                      </h3>
                      <StateStatisticsChart selectedState={selectedState} />
                    </div>
                  </div>
                </div>
              </section>





              {/* Insert the MapWithContact component here */}
              <section className="explore-product">
                <div className="container">
                  {/* Section Header */}
                  <div className="section-header-wrapper" style={{ textAlign: "center", marginBottom: "20px" }}>
                    <h2 className="h2 section-title" style={{ fontSize: "24px", fontWeight: "bold" }}>
                      Explore Statistics
                    </h2>
                  </div>

                  {/* Content Wrapper */}
                  <div className="content-wrapper" style={{ display: "flex", gap: "20px"}}>
                    {/* Left Container for Product Cards */}
                    <div
                      className="container1"
                      style={{
                        flex: 1,
                        display: "grid",
                        gap: "4px",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      }}
                    >
                      <div style={{ gridColumn: "1 / -1", textAlign: "center", marginBottom: "10px" }}>
                        <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#fff" }}>
                          Ordered Foods
                        </h3>
                      </div>

                      {["Couscous", "Kofte", "Shakshouka", "Couscous"].map((product, index) => (
                        <div
                          key={index}
                          className="product-card"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",

                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            padding: "15px",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          {/* Product Image */}
                          <figure
                            className="product-banner"
                            style={{
                              width: "100%",
                              height: "150px",
                              overflow: "hidden",
                              marginBottom: "10px",
                            }}
                          >
                            <img
                              src={require(`../../assets/images/${product.toLowerCase()}.jpg`)}
                              alt={product}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </figure>

                          {/* Product Title */}
                          <h4
                            className="product-title"
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              marginBottom: "10px",
                              color: "#fff",
                            }}
                          >
                            {product}
                          </h4>
                        </div>
                      ))}

                    </div>

                    {/* Right Container */}
                    <div
                      className="container"
                      style={{
                        flex: 1,
                       
                        // alignItems: "center",
                       // flexDirection: "column",
                        borderRadius: "8px",
                        padding: "20px",
                        backgroundColor: "#f9f9f9",
                        minHeight: "500px",
                        borderRadius: "10px",
                        opacity: "0.95",
                      }}
                    >
                      <EatingHabitsChart />
                    </div>
                  </div>
                </div>
              </section>


              {/* <section class="explore-product">
                <div class="container1 container">
                  <div class="section-header-wrapper">
                    <h2 class="h2 section-title">Explore Product</h2>

                    <NavLink to="/marketplace">
                      <button class="btn btn-primary">Explore</button>
                    </NavLink>
                  </div>

                  <ul class="product-list">
                    <li class="product-item">
                      <div class="product-card" tabindex="0">
                        <figure class="product-banner">
                          <img
                            src={require("../../assets/images/plat1.jpg")}
                            alt="Chicken Pasta"
                          />

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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

                          <NavLink to="/detailProduct">
                            {" "}
                            <button class="place-bid-btn">Show</button>
                          </NavLink>
                        </figure>

                        <div class="product-content">
                          <NavLink to="/detailProduct">
                            <a class="h4 product-title">Chicken Pasta</a>
                          </NavLink>

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
              </section> */}

              {/* <section class="top-seller">
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
              </section> */}
            </article>
          </main>

          <Footer />
          <button
            class="back-to-top"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Défilement fluide
              });
            }}
            type="button"
          ></button>
        </div>{" "}
      </div>
    </>
  );
}
