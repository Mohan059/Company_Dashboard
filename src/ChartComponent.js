
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
     
    },
  },
};

const labels = ['13 oct 2023','15 oct 2023','20 oct 2023'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1000 , 1000, 1200],
      backgroundColor: ' rgba(53, 110, 53, 1)',
      
    },
    {
      label: 'Dataset 2',
      data: [850, 850, 1250],
      backgroundColor: ' rgba(53, 110, 53, 1)',
    },
    {
      label: 'Dataset 3',
      data: [820, 840, 1260],
      backgroundColor: ' rgba(53, 110, 53, 1)',
    }
  ],
};

export function ChartComponent() {
  return <Bar options={options} data={data} />;
}
