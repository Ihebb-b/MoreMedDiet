import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { useGetPizzaQuery } from "../../../slices/statsApiSlice";

ChartJS.register(ArcElement, Tooltip);

const PizzaConsumptionChart = () => {
  // Fetch pizza consumption data using the custom API hook
  const { data, error, isLoading } = useGetPizzaQuery();

  // Handle loading state
  if (isLoading) return <p>Loading pizza consumption data...</p>;

  // Handle error state
  if (error) return <p>Error loading data</p>;

  // Create an array of unique colors for each city
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const colors = data.map(() => getRandomColor());

  // Prepare chart data
  const chartData = {
    labels: data.map((item) => item.ville), // City names
    datasets: [
      {
        data: data.map((item) => item.pizzaConsumptionCount), // Pizza consumption counts
        backgroundColor: colors, // Unique colors for each city
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    cutout: "70%", // For a gauge-like effect
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${value} pizzas consumed`;
          },
        },
      },
    },
  };

  return (

  <Doughnut data={chartData} options={chartOptions} />

);
};

export default PizzaConsumptionChart;
