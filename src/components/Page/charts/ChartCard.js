import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div
      className="chart-card"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "300px", // Fixed card height
        minWidth: "280px", // Minimum width
        transition: "transform 0.3s ease",
      }}
    >
      {title && <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>}

      {/* Chart Container */}
      <div
        style={{
          width: "100%",
          height: "100%", // Make the chart respect the card dimensions
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // Prevent content from overflowing
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ChartCard;