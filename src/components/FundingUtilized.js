// DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement);
const FundingUtilized = (props) => {
  console.log(props)
  const data = {
    labels: ['Pratham', 'Akshar'],
    datasets: [
      {
        label: 'My Donut Chart',
        data: [
          parseInt(props?.props?.Funding_Distrubuted_data?.Pratham?.Pratham_Fund_utilized || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Akshar_Fund_utilized || 0)
        ],
        backgroundColor: [
          'rgba(141, 182, 196)',
          'rgb(96, 164, 189)',
        ],
        borderColor: [
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
        ],
        borderWidth: 0.2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += `${context.parsed}`;
            }
            return label;
          },
        },
      },
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default FundingUtilized;