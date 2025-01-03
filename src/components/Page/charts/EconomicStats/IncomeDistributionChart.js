import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { useGetIncomeDistributionQuery } from "../../../../slices/statsApiSlice";

const IncomeDistributionChart = () => {
  const { data, error, isLoading } = useGetIncomeDistributionQuery();

  // Transform the data into chart-friendly format
  const chartData =
    data?.incomeDistribution
      ? Object.entries(data.incomeDistribution).map(([incomeLevel, percentage]) => ({
          incomeLevel,
          percentage: parseFloat(percentage),
        }))
      : [];

  return (
    <div className="w-full h-full flex-col items-center">
      <h2 className="text-lg font-semibold text-center mb-2">
        Income Distribution
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        This chart shows the distribution of income levels in the surveyed population.
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error fetching data</p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="incomeLevel" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default IncomeDistributionChart;