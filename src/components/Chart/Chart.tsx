import {Line} from 'react-chartjs-2';

type Props = {};

type ChartProps = {
  dataLabels: any;
  dataSet: any;
  title: any;
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
