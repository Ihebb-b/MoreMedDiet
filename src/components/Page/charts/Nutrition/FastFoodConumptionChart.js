import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import "chart.js/auto";
import { ResponsiveContainer } from "recharts";
import { useCalculateFastFoodConsumptionFrequencyQuery } from "../../../../slices/statsApiSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const FastFoodConsumptionChart = () => {
  const { data, error, isLoading } = useCalculateFastFoodConsumptionFrequencyQuery();
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data && data.percentages && selectedFrequency) {
      const percentage = parseFloat(data.percentages[selectedFrequency]) || 0;

      setChartData({
        labels: [
          `${selectedFrequency} (${percentage.toFixed(2)}%)`,
          `Other Frequencies (${(100 - percentage).toFixed(2)}%)`,
        ],
        datasets: [
          {
            label: "Fast-Food Consumption",
            data: [percentage, 100 - percentage],
            backgroundColor: ["#FF5733", "#DCDCDC"],
            borderColor: ["#FF5733", "#DCDCDC"],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data, selectedFrequency]);

  const handleFrequencyChange = (e) => {
    setSelectedFrequency(e.target.value);
  };

  return (
    <div className="w-full h-full flex-col items-center">
      <h2 className="text-lg font-semibold text-center mb-2">
        Fast-Food Consumption Frequency
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        This chart shows the percentage distribution of fast-food consumption
        frequencies among users.
      </p>
      {isLoading ? (
        <p>Loading consumption data...</p>
      ) : error ? (
        <p className="text-red-500">Error loading consumption data</p>
      ) : (
        <>
          <div className="mb-4 text-center">
            <select
              className="border border-gray-300 rounded px-2 py-1"
              onChange={handleFrequencyChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select a frequency
              </option>
              {Object.keys(data?.percentages || {}).map((frequency) => (
                <option key={frequency} value={frequency}>
                  {frequency}
                </option>
              ))}
            </select>
          </div>

          {chartData ? (
            <div className="w-full" style={{ height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <Pie
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) => {
                            const label = tooltipItem.label || "";
                            const value = tooltipItem.raw || 0;
                            return `${label}: ${value.toFixed(2)}%`;
                          },
                        },
                      },
                    },
                  }}
                />
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Please select a frequency to view the chart.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default FastFoodConsumptionChart;
