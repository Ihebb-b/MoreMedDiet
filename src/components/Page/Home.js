import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";

import "./Index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGetAllSuggestionsQuery } from "../../slices/searchApiSlice";
import mapImage from "../../assets/images/map.png";
import StateStatisticsChart from "./charts/StateStatisticsChart";
import EatingHabitsChart from "./charts/EatingHabitsChart";
import delecious from "../../assets/images/delecious.jpg";
import backgoundMap from "../../assets/images/backgroundMap.jpg";
import backgoundMeals from "../../assets/images/backgroundMeals.jpg";
import MealsListComponent from "../Meals/MealsListCompoent";
import MedicalHistoryChart from "./charts/HealthStats/MedicalHistoryChart";

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
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  useEffect(() => {
    if (isInitialLoad) {
      handleStateClick("Tunisia");
      setIsInitialLoad(false); // Ensure this runs only once
  }
}, [handleStateClick, isInitialLoad]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setTimeout(() => {
      setFilteredSuggestions([]);
      inputRef.current.blur();
    }, 0);
  };

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
      <div
        className="wrapper "
        style={{
          background: "white",
        }}
      >
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
                <div className="responsive-background"></div>

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
                    <div className="d-flex flex-column flex-md-row mb-4 gap-2 w-full">
                      <div className="relative w-full">
                        <i
                          className="search-icon fa fa-search position-absolute  left-3 top-1/2 transform -translate-y-1/3 "
                          style={{
                            top: "60.5%",
                          }}
                        ></i>
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
                        className="custom-btn right-1 top-2/2 transform -translate-y-1/2 py-2 px-4 rounded text-white shadow transition duration-300"
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


            {/*  Map section */}
              <section
                className="map-section"
                style={{
                  backgroundImage: `url(${backgoundMap})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container1 container mt-80">
                  <div className="section-header-wrapper">
                    <h2
                      className="h2 section-title"
                      style={{
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                    >
                      Participants Percentage By Country
                    </h2>
                  </div>

                  <div
                    className="container"
                    style={{
                      display: "flex",
                      gap: "10px",
                      backgroundColor: "#FEF9E7",
                      // backgroundSize: "cover",
                      // backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="map-card"
                      style={{
                        flex: "2",
                        overflow: "hidden",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        position: "relative", // Ensure buttons position correctly

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
                        style={{
                          position: "absolute",
                          top: "54%",
                          left: "24%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Morocco</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Algeria")}
                        style={{
                          position: "absolute",
                          top: "52%",
                          left: "29%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Algeria</span>
                      </button>
                      <button
                        onClick={() => handleStateClick("Tunisia")}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "34%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Tunisia</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Libya")}
                        style={{
                          position: "absolute",
                          top: "58%",
                          left: "40%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Libya</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Egypt")}
                        style={{
                          position: "absolute",
                          top: "60%",
                          left: "50%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Egypt</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Palestine")}
                        style={{
                          position: "absolute",
                          top: "58%",
                          left: "55%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Palestine</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Syria")}
                        style={{
                          position: "absolute",
                          top: "53%",
                          left: "59%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Syria</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Turkey")}
                        style={{
                          position: "absolute",
                          top: "47%",
                          left: "54%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Turkey</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Greece")}
                        style={{
                          position: "absolute",
                          top: "45%",
                          left: "47%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Greece</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Italy")}
                        style={{
                          position: "absolute",
                          top: "42%",
                          left: "40%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Italy</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("France")}
                        style={{
                          position: "absolute",
                          top: "35%",
                          left: "32%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">France</span>
                      </button>

                      <button
                        onClick={() => handleStateClick("Spain")}
                        style={{
                          position: "absolute",
                          top: "42%",
                          left: "25%",
                        }}
                        className="marker-button"
                      >
                        <span className="tooltip">Spain</span>
                      </button>
                    </div>

                    <div
                      className="chart-container"
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        //justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#EBF5FB",
                        borderRadius: "8px",
                        padding: "5px",
                        opacity: "0.95",
                      }}
                    >
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

              {/*  Most Viwed meals Section */}
              <section
                class="new-product"
                style={{
                  backgroundImage: `url(${backgoundMeals})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div class="container1 container mt-30 ">
                  <div class="section-header-wrapper">
                    <h2
                      className="h2 section-title"
                      style={{
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                    >
                      Most viewed Meals
                    </h2>
                    <NavLink to="/survey">
                      <button class="custom-btn">View all</button>
                    </NavLink>
                  </div>

                  <div class="container mt-14">
                    <MealsListComponent />
                  </div>
                </div>
              </section>

              {/* Insert the MapWithContact component here */}
              <section
                className="explore-product"
                style={{
                  backgroundImage: `url(${backgoundMeals})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container">
                  {/* Section Header */}
                  <div
                    className="section-header-wrapper"
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    <h2
                      className="h2 section-title"
                      style={{
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                    >
                      Explore Statistics
                    </h2>
                    <NavLink to="/survey">
                      <button class="custom-btn">View all</button>
                    </NavLink>
                  </div>

                  {/* Content Wrapper */}
                  <div
                    className="content-wrapper"
                    style={{ display: "flex", gap: "20px" }}
                  >
                    <div
                      className="container"
                      style={{
                        flex: 1,
                        borderRadius: "8px",
                        padding: "20px",
                        backgroundColor: "#f9f9f9",
                        maxHeight: "600px",
                        minHeight: "500px",
                        borderRadius: "10px",
                        opacity: "0.95",
                      }}
                    >
                      <MedicalHistoryChart />
                    </div>

                    {/* Right Container */}
                    <div
                      className="container"
                      style={{
                        flex: 1,
                        borderRadius: "8px",
                        padding: "20px",
                        backgroundColor: "#f9f9f9",
                        maxHeight: "600px",
                        borderRadius: "10px",
                        opacity: "0.95",
                      }}
                    >
                      <EatingHabitsChart />
                    </div>
                  </div>
                </div>
              </section>
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
