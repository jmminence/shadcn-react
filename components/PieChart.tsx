import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Data1', 'Data2', 'Data3'],
    datasets: [
      {
        label: 'Dataset 4',
        data: [300, 70, 100],
        backgroundColor: ['rgb(102, 153, 142)', 'rgb(204, 102, 112)', 'rgb(153, 102, 153)'],
        hoverOffset: 4
      }
    ]
  };

  return <Pie data={data} />;
};

export default PieChart; 