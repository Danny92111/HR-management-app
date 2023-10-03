import {Line} from 'react-chartjs-2';

type ChartProps = {
  dataLabels: string[];
  dataSet: number[];
  title: string;
};

const ChartComponent = ({dataLabels, dataSet, title}: ChartProps) => {
  const data = {
    labels: dataLabels,
    datasets: [
      {
        label: title,
        data: dataSet,
        borderWidth: 2,
      },
    ],
  };
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>{title}</h2>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
