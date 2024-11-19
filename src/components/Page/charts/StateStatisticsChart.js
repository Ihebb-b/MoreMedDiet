// // StateStatisticsChart.js
// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { useGetParticipantsByStateQuery } from "../../../slices/statsApiSlice";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const StateStatisticsChart = ({ selectedState }) => {
//   const { data, error, isLoading , isUninitialized} = useGetParticipantsByStateQuery(selectedState, {
//     skip: !selectedState, // Skip fetching if no state is selected
//   });

//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     if (data) {
//       setChartData({
//         labels: data.details.map((item) => `${item._id} (${item.count})`),
//         datasets: [
//           {
//             label: `Participants in ${selectedState}`,
//             data: data.details.map((item) => item.count),
//             backgroundColor: ["#FF5733", "#FFC300", "#DAF7A6", "#C70039"],
//             borderColor: "#FFFFFF",
//             borderWidth: 1,
//           },
//         ],
//       });
//     }
//   }, [data, selectedState]);

//   if (isUninitialized) {
//     return <p className="text-gray-500">Select a state to view the chart.</p>;
//   }

//   if (isLoading) {
//     return <p>Loading state data...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">Error loading state data. Please try again.</p>;
//   }

//   return (
//     <div className="w-full h-full">
//      {chartData ? (
//         <Pie
//           data={chartData}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//           }}
//         />
//       ) : (
//         <p className="text-center text-gray-500">No data available for the selected state</p>
//       )}
//     </div>
//   );
// };

// export default StateStatisticsChart;


import React from "react";
import { Bar } from "react-chartjs-2";
import { useGetParticipantsByStateQuery } from "../../../slices/statsApiSlice";

const StateStatisticsChart = ({ selectedState }) => {
  const { data: statistics, isLoading, isError } = useGetParticipantsByStateQuery(
    selectedState,
    {
      skip: !selectedState, // Skip query if no state is selected
    }
  );

  if (!selectedState) {
    return <p>Please select a state to view statistics.</p>;
  }

  if (isLoading) {
    return <p>Loading statistics for {selectedState}...</p>;
  }

  if (isError) {
    return <p>Failed to load statistics. Please try again.</p>;
  }

  if (!statistics || statistics.details.length === 0) {
    return <p>No data available for {selectedState}.</p>;
  }

  const { totalParticipants, uniqueCities, details } = statistics;

  const chartData = {
    labels: details.map((detail) => detail.city),
    datasets: [
      {
        label: "Number of Participants",
        data: details.map((detail) => detail.count),
        backgroundColor: "#9fc5e8",
        borderColor: "#388e3c",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Participants",
        },
      },
      x: {
        title: {
          display: true,
          text: "Cities",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.raw} participants (${details[context.dataIndex].percentage})`,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h5>Total Participants: {totalParticipants}</h5>
      <div style={{ marginTop: "20px" }}>
        <h5>Participants by City</h5>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default StateStatisticsChart;
