import {useEffect, useState} from 'react';
import {getEntries} from '../../helpers/apiRequests';
import {useDispatch} from 'react-redux';
import {updateEntryAll} from '../../context/entriesSlice';
import ChartComponent from '../../components/Chart/Chart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  getSalaryByExperience,
  getAgeByIndustry,
  getSalaryByIndustry,
  getAgeByExperience,
} from '../../helpers/calculateAverage';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const chartList = [
  'Average age by industry',
  'Average age by experience',
  'Average salary by industry',
  'Average salary by experience',
];

const renderChart = (activeChart: any, chart: any) => {
  switch (activeChart) {
    case 'Average age by industry':
      return (
        <ChartComponent
          dataLabels={chart.age_by_industry.labels}
          dataSet={chart.age_by_industry.dataSets}
          title={'Average age by industry'}
        ></ChartComponent>
      );
      break;
    case 'Average age by experience':
      return (
        <ChartComponent
          dataLabels={chart.age_by_experience.labels}
          dataSet={chart.age_by_experience.dataSets}
          title={'Average age by experience'}
        ></ChartComponent>
      );
      break;
    case 'Average salary by industry':
      return (
        <ChartComponent
          dataLabels={chart.salary_by_industry.labels}
          dataSet={chart.salary_by_industry.dataSets}
          title={'Average salary by industry'}
        ></ChartComponent>
      );
      break;
    case 'Average salary by experience':
      return (
        <ChartComponent
          dataLabels={chart.salary_by_experience.labels}
          dataSet={chart.salary_by_experience.dataSets}
          title={'Average salary by experience'}
        ></ChartComponent>
      );
      break;
  }
};

const Charts = () => {
  const dispatch = useDispatch();
  const [activeChart, setActiveChart] = useState('Average age by industry');
  const [chartsData, setChartsData] = useState([]);
  useEffect(() => {
    getEntries().then((response) => {
      dispatch(updateEntryAll(response));
      setChartsData((prevState) => ({
        ...prevState,
        salary_by_experience: getSalaryByExperience(response),
      }));
      setChartsData((prevState) => ({
        ...prevState,
        age_by_industry: getAgeByIndustry(response),
      }));
      setChartsData((prevState) => ({
        ...prevState,
        salary_by_industry: getSalaryByIndustry(response),
      }));
      setChartsData((prevState) => ({
        ...prevState,
        age_by_experience: getAgeByExperience(response),
      }));
    });
  }, []);

  const handleClick = (event: any) => {
    const chartName = event.target.getAttribute('data-name');
    setActiveChart(chartName);
  };
  return (
    <section className="chart-container">
      <nav>
        <ul>
          {chartList.map((chart, i) => (
            <li data-name={chart} key={i} onClick={handleClick}>
              {chart}
            </li>
          ))}
        </ul>
      </nav>
      {chartsData.length != 0 && renderChart(activeChart, chartsData)}
    </section>
  );
};

export default Charts;
