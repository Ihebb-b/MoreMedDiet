import React from "react";
import { useNavigate } from "react-router-dom";
import GenderStatisticsChart from "../charts/Demographic Statistics/GenderStatisticsChart";
import CountryRepresentationChart from "../charts/Demographic Statistics/CountryRepresentationChart";
import SocialStatusChart from "../charts/Demographic Statistics/SocialStatusChart";
import Navbar from "../Navbar";
import Footer from "../Footer";
import backgoundMeals from "../../../assets/images/backgroundMeals.jpg";
import AgeGroupDistributionChart from "../charts/Demographic Statistics/AgeGroupDistributionChart";
import AverageChildrenChart from "../charts/Demographic Statistics/AverageChildrenChart";

const DemographicStatistics = () => {
  return (
    <>
      <div
        className="wrapper"
        style={{
          backgroundImage: `url(${backgoundMeals})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header id="header" className="header ">
          <div className="menu mr-70 ml-70">
            <Navbar />
          </div>
        </header>

        <main className="main">
          <section className="hero1 mb-10">
            <div className="dashboard-content">
              <div className="section">
                <div className="section-left">
                  <div className="text mt-20">
                    <h2
                      className="h2 section-title"
                      style={{
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                    >
                      Demographic Statistics
                    </h2>
                  </div>

                 

                     {/* Chart Section */}
            <div className="chart-container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Always-visible Charts */}
              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
                <GenderStatisticsChart />
              </div>
              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
                <AgeGroupDistributionChart />
              </div>
              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
              <SocialStatusChart />
              </div>

              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
              <AverageChildrenChart />
              </div>

              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
              <CountryRepresentationChart/>
              </div>








                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DemographicStatistics;
