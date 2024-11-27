import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">

    {/* <div
      className="chart-container"
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "10px",
        opacity: "1",
      }}
    > */}
        {title && <h3 className="chart-title">{title}</h3>}
        {children}
    </div>
  );
};

export default ChartCard;