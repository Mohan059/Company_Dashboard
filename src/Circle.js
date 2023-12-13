import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['INV-1','INV2','INV-3','INV-4','INV-5' ],
  datasets: [
    {
      label: 'capacity',
      data: [98.1,104.29,100.28,98.1,121.90],
      backgroundColor: [
        'rgba(50,102,204,1)',
        'rgba(233,54,20,1)',
        'rgba(251,154,3,1)',
        'rgba(16,150,25,1)',
        'rgba(150,0,150,1)',
       
       
      ],
      borderColor: [
        'rgba(255,208,100,2)',
        'rgba(60,144,59,255)',
        'rgba(71,44,131,255)',
        'rgba(23,77,196,255)',
        'rgba(178,56,38,255)',
       
      ],
      borderWidth: 1,
    },
  ],
};
export const options4 = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxHeight: 10,
      },
    },
    datalabels: {
      color: "white",
    },
  },
  
  responsive: true,
};

export function Circle() {
  return <Doughnut  options={options4} data={data}  />;
}
