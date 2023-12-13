import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie as ChartJS2Pie } from 'react-chartjs-2'; // Change the import name
import { Doughnut, Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data4 = {
  labels: ["INV-1", "INV-2", "INV-3", "INV-4", "INV-5"],
  datasets: [
    {
      label: "# of Votes",
      data: [237, 727, 490],
      backgroundColor: [
        "rgba(227, 87, 58, 1)",
        "rgba(93, 41, 118, 1)",
        "rgba(35, 125, 41, 1)",
      ],
      offset: [25, 0, 0],
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
  cutoutPercentage: 30,
  maintainAspectRatio: false,
  responsive: true,
};


// export const data = {
//   labels: ['INV1', 'INV2', 'INV3', 'INV4', 'INV5', ],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [20,20,20,20,20],
//       backgroundColor: [
//         'rgba(35,125,41,1)',
//         'rgba(35,125,41,1)',
//         'rgba(227,87,53,1)',
//         'rgba(93,41,118,1)',
//         'rgba(93,41,118,1)',
        
//       ],
//       borderColor: [
//         'rgba(35,125,41,1)',
//         'rgba(35,125,41,1)',
//         'rgba(227,87,53,1)',
//         'rgba(93,41,118,1)',
//         'rgba(93,41,118,1)',
//       ],
      
//       borderWidth: 2,
//     },
//   ],
// };

export function Chart() {
  return  <div>
    <Pie options={options4} data={data4} />
    {/* <ChartJS2Pie data={data} />; */}
  </div>  
}
