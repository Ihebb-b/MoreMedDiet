import React from "react";
import { PolarArea } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  import { useGetSocialStatusQuery } from "../../../../slices/statsApiSlice";
  import "chart.js/auto";
  ChartJS.register(ArcElement, Tooltip);
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  
const SocialStatusChart = () => {
  const { data, error, isLoading } = useGetSocialStatusQuery();

  if (isLoading) return <p>Loading social status data...</p>;
  if (error) return <p>Error loading social status data</p>;

  const chartData = {
    labels: data.socialStates.map((state) => state.socialState),
    datasets: [
      {
        label: "Social Status Distribution",
        data: data.socialStates.map((state) => state.percentage),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#66BB6A",
          "#FFA726",
          "#AB47BC",
          "#29B6F6",
          "#EF5350",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
          ticks: {
            display: false,
          },
        },
      },
    plugins: {
      legend: {
        position: "top",
      },
      datalabels: {
        color: "#000",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => `${value}%`, 
        anchor: "end",
        align: "start",
        offset: 10,
      },
    },
  };

  return (
    <div className="w-full h-full  flex-col items-center">
      <h2 className="text-lg font-semibold text-center mb-2">
        Social Status Distribution
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        This chart shows the percentage distribution of survey participants
        based on their social status.
      </p>
      <ResponsiveContainer width="100%" height={250}>
        <PolarArea data={chartData} options={chartOptions} />
        </ResponsiveContainer>
    </div>
  );
};

export default SocialStatusChart;
