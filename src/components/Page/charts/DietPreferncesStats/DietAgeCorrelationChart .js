// DietAgeCorrelationChart.js
import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { useGetDietAgeCorrelationQuery } from "../../../../slices/statsApiSlice";
import { ResponsiveContainer } from "recharts";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const DietAgeCorrelationChart = () => {
  const { data, error, isLoading } = useGetDietAgeCorrelationQuery();

  // Function to assign consistent colors
  const getRandomColor = (diet) => {
    const colors = {
      Crudism: "#FF5733",
      Fruitarian: "#33FF57",
      Vegetarian: "#3357FF",
      Vegan: "#FFC300",
      Flexitarian: "#C70039",
      "No Diet": "#581845",
      "Religiously Observant": "#900C3F",
      Other: "#DAF7A6",
    };
    return colors[diet] || "#D3D3D3";
  };

  const chartData = useMemo(() => {
    if (!data) return null;

    const ageGroups = data.correlation.map((item) => item.ageGroup);
    const dietTypes = [
      "Crudism",
      "Fruitarian",
      "Vegetarian",
      "Vegan",
      "Flexitarian",
      "No Diet",
      "Religiously Observant",
      "Other",
    ];

    const datasets = dietTypes.map((diet) => {
      return {
        label: diet,
        data: data.correlation.map((item) => item.diets[diet] || 0),
        backgroundColor: getRandomColor(diet),
        stack: "Stack 0",
      };
    });

    return {
      labels: ageGroups,
      datasets,
    };
  }, [data]);

  if (isLoading) return <p>Loading diet-age correlation data...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="w-full h-full flex-col items-center">
      <h2 className="text-lg font-semibold text-center mb-2">
        Correlation Between Dietary Preferences and Age
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        This chart shows the distribution of dietary preferences across different age groups.
      </p>
      {chartData ? (
        <div style={{ width: "100%", height: "100%" }}>
          <ResponsiveContainer width="100%" height={250}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) => {
                        const value = tooltipItem.raw || 0;
                        return `${tooltipItem.dataset.label}: ${value}`;
                      },
                    },
                  },
                },
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                  },
                },
              }}
            />
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-500">No data available to display</p>
      )}
    </div>
  );
};

export default DietAgeCorrelationChart;
