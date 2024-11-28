import React from "react";
import { useNavigate } from "react-router-dom";
import GenderStatisticsChart from "../charts/Demographic Statistics/GenderStatisticsChart";
import CountryRepresentationChart from "../charts/Demographic Statistics/CountryRepresentationChart";
import SocialStatusChart from "../charts/Demographic Statistics/SocialStatusChart";
import Navbar from "../Navbar";
import Footer from "../Footer";
import backgoundMeals from "../../../assets/images/backgroundMeals.jpg";
import ChartCard from "../charts/ChartCard";
import AgeGroupDistributionChart from "../charts/Demographic Statistics/AgeGroupDistributionChart";
import StateStatisticsChart from "../charts/StateStatisticsChart";
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
          minHeight: "100vh",
          margin: "0",
          padding: "0",
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


                  {/* <div className="chart-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4"> */}
                  {/* 
                  // className="about-content"
                  // style={{ display: "flex", gap: "20px" }}
                  */}

                  <div
                    className="chart-container"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "20px",
                      padding: "20px",
                    }}
                  >
                    {/* Gender Statistics */}
                    <ChartCard >
                      <GenderStatisticsChart />
                    </ChartCard>

                    {/* Social Status */}
                    <ChartCard >
                      <SocialStatusChart />
                    </ChartCard>

                    {/* Country Representation */}
                    <ChartCard >
                      <CountryRepresentationChart />
                    </ChartCard>

                    {/* Age Group Distribution */}
                    <ChartCard >
                      <AgeGroupDistributionChart />
                    </ChartCard>

                    {/* Average Children */}
                    <ChartCard >
                      <AverageChildrenChart />
                    </ChartCard>

                  
                   

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
