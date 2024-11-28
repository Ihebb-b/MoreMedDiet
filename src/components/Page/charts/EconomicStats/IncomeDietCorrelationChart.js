import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetIncomeDietCorrelationQuery } from "../../../../slices/statsApiSlice";
import { ResponsiveContainer } from "recharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IncomeDietCorrelationChart = () => {
  // Fetch data using your custom hook (useGetIncomeDietCorrelationQuery)
  const { data, error, isLoading } = useGetIncomeDietCorrelationQuery();

  // Chart.js options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Correlation Between Income Level and Diet Diversity" },
    },
  };

  // Prepare chart data from API response
  const chartData = {
    labels: ["Moderate", "Medium", "Costly"],  // Income level categories
    datasets: [
      {
        label: "Average Diet Diversity",
        data: [
          data?.incomeDistribution?.low || 0,          // Low income average diet diversity
          data?.incomeDistribution?.middle || 0,       // Middle income average diet diversity
          data?.incomeDistribution?.high || 0,         // High income average diet diversity
          data?.incomeDistribution?.undisclosed || 0,  // Undisclosed income average diet diversity
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",  // Color for bars
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="w-full h-full flex-col items-start space-y-4">
      <h1 className="text-lg font-semibold text-center mb-2">Income Level vs. Diet Diversity</h1>
      <p className="text-gray-600 text-sm">
        A comparison of average diet diversity across different income levels.
      </p>

      <ResponsiveContainer width="100%" height={280}>
      <Bar options={options} data={chartData} />
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeDietCorrelationChart;
