import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'Dataset 5',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 25, y: 20, r: 20 },
          { x: 30, y: 30, r: 25 },
          { x: 10, y: 10, r: 10 },
          { x: 100, y: 100, r: 55 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bubble data={data} />;
};

export default BubbleChart; 