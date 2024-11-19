import React from "react";
import { useNavigate } from "react-router-dom";
import GenderStatisticsChart from "../charts/Demographic Statistics/GenderStatisticsChart";
import CountryRepresentationChart from "../charts/Demographic Statistics/CountryRepresentationChart";
import SocialStatusChart from "../charts/Demographic Statistics/SocialStatusChart";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DemographicStatistics = () => {
    return (
        <>
            <div className="wrapper">
                <div>
                    <header id="header" className='header '>
                        <div className="menu mr-70 ml-70">
                            <Navbar />
                        </div>
                    </header>
       
                    <main>
                        <section className="hero1 mb-70">
                            <div className="dashboard-content">
                                <div className="section">
                                    <div className="section-left">
                                        <div className="text">
                                            <h2 style={{ color: "white" }}>
                                                Demographic Statistics<br /><br />
                                            </h2>
                                        </div>

                                        <div className="about-content" style={{ display: "flex", gap: "20px" }}>
                                            {/* Gender Statistics Chart */}

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
                                                <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
                                                    <GenderStatisticsChart />
                                                </div>
                                            </div>

                                            {/* Social Status Chart */}
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
                                                <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
                                                    <SocialStatusChart />
                                                </div>
                                            </div>

                                            {/* Country Representation Chart */}
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
                                                <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
                                                    <CountryRepresentationChart />
                                                </div>
                                            </div>
                                            


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>


                    <Footer />

                </div>
            </div>
        </>

    );
};

export default DemographicStatistics;
