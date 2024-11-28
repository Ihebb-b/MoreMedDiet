import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { ResponsiveContainer } from "recharts";
import { useCalculateActivityDietCorrelationQuery } from "../../../../slices/statsApiSlice";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ActivityDietCorrelationChart = () => {
  const { data, error, isLoading } = useCalculateActivityDietCorrelationQuery();

  if (isLoading) return <p>Loading activity-diet correlation data...</p>;
  if (error) return <p>Error loading data</p>;

  const { correlationPercentages } = data;

  const labels = Object.keys(correlationPercentages);
  const yesData = labels.map((diet) => parseFloat(correlationPercentages[diet].yes));
  const noData = labels.map((diet) => parseFloat(correlationPercentages[diet].no));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Physical Activity - Yes (%)",
        data: yesData,
        backgroundColor: "#66BB6A",
      },
      {
        label: "Physical Activity - No (%)",
        data: noData,
        backgroundColor: "#FF7043",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
    scales: {
      x: { title: { display: true, text: "Diet Types" } },
      y: {
        title: { display: true, text: "Percentage (%)" },
        ticks: { beginAtZero: true, max: 100 },
      },
    },
  };

  return (
    <div className="w-full h-auto p-4 flex-col items-center">
      <h2 className="text-lg font-semibold text-center mb-2">
        Correlation Between Diet Types and Physical Activity
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        This chart shows the percentage of users who engage in physical activity by diet type.
      </p>
      <div className="w-full" style={{ height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <Bar data={chartData} options={chartOptions} />
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityDietCorrelationChart;
