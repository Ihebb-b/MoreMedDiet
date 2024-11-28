import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ResponsiveContainer } from 'recharts';
import { useGetEatingOutVsCookingQuery } from '../../../../slices/statsApiSlice';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EatingOutVsCooking = () => {
  const { data, error, isLoading } = useGetEatingOutVsCookingQuery();


  // Chart.js options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`,
        },
      },
    },
  };

  // Prepare data for Chart.js
  const chartData = {
    labels: [
      'Everyday',
      '2-3 Times a Week',
      '1-2 Times a Week',
      'Rarely',
      'Never',
    ],
    datasets: [
      {
        label: 'Home Made Meals Frequency',
        data: data?.homeMadeDistribution
          ? Object.values(data.homeMadeDistribution)
          : [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Ordered Meals Frequency',
        data: data?.orderedDistribution
          ? Object.values(data.orderedDistribution)
          : [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full h-full flex-col items-start space-y-4">
      <h1 className="text-lg font-semibold text-center mb-2">
        Eating Out vs. Cooking at Home
      </h1>
      <p className="text-gray-600 text-sm">
        A comparative analysis of home-made meals vs. ordered meals.
      </p>

      <ResponsiveContainer width="100%" height={250}>
      <Bar options={options} data={chartData} />
      </ResponsiveContainer>
    </div>
  );
};

export default EatingOutVsCooking;
