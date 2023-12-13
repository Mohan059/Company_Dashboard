/*
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
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['13 Oct 2023', '15 Oct 2023', '17 Oct 2023', '17 Oct 2023', '21 Oct 2023', '21 Oct 2023','23 OCT 2023',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:[100,200,300,400,500,600,800,1000,1100],
      backgroundColor: 'rgba(53,110,53,1)',
    },
    {
      label: 'Dataset 2',
      data:[200,400,600,700,900,850,990,1200,1300],
      background: ' rgba(91,136,117,1)'
,
    },
    {
      label: 'Dataset 1',
      data:[100,200,300,400,500,600,800,1000,1100],
      backgroundColor: 'rgba(53,110,53,1)',
    },
    {
      label: 'Dataset 2',
      data:[200,400,600,700,900,850,990,1200,1300],
      background: ' rgba(91,136,117,1)'
,
    },
    
    
  ],

};

export function Vertical() {
  return <Bar options={options} data={data} />;
}
*/

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
//import { Vertical } from './Vertical';

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

const labels = ['13 oct 2023','15 oct 2023','20 oct 2023','23 Oct 2023','25 Oct 2023'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1000 , 1000, 1200,1350,1450],
      backgroundColor: ' rgba(53, 110, 53, 1)',
      
    },
    {
      label: 'Dataset 2',
      data: [850, 850, 1250,1370,1430],
      background: ' rgba(91, 136, 117, 1)',
     


    },
    
  ],
};

export function Vertical() {
  return <Bar options={options} data={data} />;
}
