import {formatAge} from './getAge';
import {entriesAll, entrySingle} from '../context/entriesSlice';

const getAverage = (instances: number[]): number => {
  const sum = instances.reduce((a, b) => a + b, 0);
  const average = sum / instances.length || 0;
  return Math.round(average);
};

const getIndustryTypes = (data: entriesAll): string[] => {
  return Array.from(new Set(data.map((row: any) => row.industry)));
};

const getExperienceTypes = (data: entriesAll) => {
  return Array.from(
    new Set(
      data.map((row: entrySingle) =>
        row.years_of_experience ? row.years_of_experience : 0,
      ),
    ),
  );
};

export const getAgeByIndustry = (data) => {
  const industries = getIndustryTypes(data);
  const obj = [];
  industries.forEach((industry) => {
    const getAllAgesByIndustryType = data
      .filter((dataRow: entrySingle) => dataRow.industry === industry)
      .map((row: entrySingle) => {
        if (row.date_of_birth) {
          return formatAge(row.date_of_birth);
        }
      });
    console.log(getAverage(getAllAgesByIndustryType));
    obj.push({
      industry: industry,
      average_age: getAverage(getAllAgesByIndustryType),
    });
  });

  return {
    labels: obj.map((entry) => entry.industry),
    dataSets: obj.map((entry) => entry.average_age),
  };
};

export const getAgeByExperience = (data) => {
  const experienceTypes = getExperienceTypes(data);
  const obj = [];

  experienceTypes.forEach((experience) => {
    const getAllAgesByExperienceType = data
      .filter((dataRow: entrySingle) => dataRow.years_of_experience === experience)
      .map((row: entrySingle) => {
        if (row.date_of_birth) {
          return formatAge(row.date_of_birth);
        }
      });
    obj.push({
      experience: experience,
      average_age: getAverage(getAllAgesByExperienceType),
    });
  });

  return {
    labels: obj.map((entry) => entry.experience),
    dataSets: obj.map((entry) => entry.average_age),
  };
};

export const getSalaryByIndustry = (data) => {
  const industries = getIndustryTypes(data);
  const obj = [];

  industries.forEach((industry) => {
    const getAllSalariesByIndustryType = data
      .filter((dataRow: entrySingle) => dataRow.industry === industry)
      .map((dataRow: entrySingle) => {
        if (dataRow.salary) {
          return dataRow.salary;
        }
      });
    obj.push({
      industryType: industry,
      average_salary: getAverage(getAllSalariesByIndustryType),
    });
  });

  return {
    labels: obj.map((entry) => entry.industryType),
    dataSets: obj.map((entry) => entry.average_salary),
  };
};

export const getSalaryByExperience = (data) => {
  const experienceTypes = getExperienceTypes(data);
  const obj = [];

  experienceTypes.forEach((experience) => {
    const getAllSalariesByExperience = data
      .filter((dataRow: entrySingle) => dataRow.years_of_experience === experience)
      .map((dataRow: entrySingle) => dataRow.salary);

    obj.push({
      experience: experience,
      average_salary: getAverage(getAllSalariesByExperience),
    });
  });

  return {
    labels: obj.map((entry) => entry.experience),
    dataSets: obj.map((entry) => entry.average_salary),
  };
};
