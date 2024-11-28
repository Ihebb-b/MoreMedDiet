import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import backgoundMeals from "../../../assets/images/backgroundMeals.jpg";
import AverageFruitIntakeChart from "../charts/HealthStats/AverageFruitIntakeChart";
import AverageVegetableIntakeChart from "../charts/HealthStats/AverageVegetableIntakeChart";
import DietDistributionChart from "../charts/HealthStats/DietDistributionChart";
import PhysicalActivityRatioChart from "../charts/HealthStats/PhysicalActivityRatioChart";
import VegetarianVeganPercentageChart from "../charts/HealthStats/VegetarianVeganPercentageChart";

const HealthAndDiet = () => {
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
                      Health and Diet Statistics
                    </h2>
                  </div>

                 

                     {/* Chart Section */}
            <div className="chart-container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Always-visible Charts */}
              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
                <AverageFruitIntakeChart />
              </div>
              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
                <AverageVegetableIntakeChart />
              </div>
              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
              <DietDistributionChart />
              </div>

              <div className="chart bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
              <PhysicalActivityRatioChart />
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

export default HealthAndDiet;
