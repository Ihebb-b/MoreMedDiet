import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { useGetStatisticsAverageVegetableIntakeQuery } from "../../../../slices/statsApiSlice";
import { ResponsiveContainer } from "recharts";

ChartJS.register(ArcElement, Tooltip);

const AverageVegetableIntakeChart = () => {
  const { data, error, isLoading } = useGetStatisticsAverageVegetableIntakeQuery();

  if (isLoading) return <p>Loading average vegetable intake data...</p>;
  if (error) return <p>Error loading data</p>;

  const averageIntake = data?.averageVegetableIntakePerDay || 0;

  const chartData = {
    labels: ["Average Vegetable Intake", "Remaining to 10"],
    datasets: [
      {
        data: [averageIntake, 10 - averageIntake],
        backgroundColor: ["#66BB6A", "#E0E0E0"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    cutout: "80%", 
    plugins: {
      tooltip: {
        enabled: true, 
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            const percentage = ((value / 10) * 100).toFixed(1);
            return `${percentage}% of max daily intake`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full  flex-col items-center">
      <h2 className="text-lg font-semibold text-center mb-2">
        Average Daily Vegetable Intake
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        This chart shows the average units of vegetables consumed per day based on survey responses.
      </p>
      <ResponsiveContainer width="100%" height={250}>
        <Doughnut data={chartData} options={chartOptions} />
      </ResponsiveContainer>
      
    </div>
  );
};

export default AverageVegetableIntakeChart;
