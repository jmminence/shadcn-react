import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'Dataset',
        data: [
          { x: 20, y: 5, r: 15 },
          { x: 20, y: 10, r: 15 }, 
          { x: 10, y: 7, r: 15 },
          { x: 20, y: 10, r: 15 },
          { x: 40, y: 6, r: 15 },
          { x: 20, y: 10, r: 15 },
          { x: 14, y: 2, r: 15 },
          { x: 20, y: 9, r: 15 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bubble data={data} />;
};

export default BubbleChart; 