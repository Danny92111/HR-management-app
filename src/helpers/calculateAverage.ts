import {formatAge} from './getAge';

const getAverage = (instances: any) => {
  const sum = instances.reduce((a: any, b: any) => a + b, 0);
  const average = sum / instances.length || 0;
  return Math.round(average);
};

const getIndustryTypes = (data: any) => {
  return Array.from(new Set(data.map((row: any) => row.industry)));
};

const getExperienceTypes = (data: any) => {
  return Array.from(
    new Set(
      data.map((row: any) => (row.years_of_experience ? row.years_of_experience : 0)),
    ),
  );
};

export const getAgeByIndustry = (data: any) => {
  const industries = getIndustryTypes(data);
  let obj: any = [];

  industries.forEach((industry) => {
    const getAllAgesByIndustryType = data
      .filter((dataRow: any) => dataRow.industry === industry)
      .map((row: any) => {
        if (row.date_of_birth) {
          return formatAge(row.date_of_birth);
        }
      });
    obj.push({
      industry: industry,
      average_age: getAverage(getAllAgesByIndustryType),
    });
  });

  return {
    labels: obj.map((entry: any) => entry.industry),
    dataSets: obj.map((entry: any) => entry.average_age),
  };
};

export const getAgeByExperience = (data: any) => {
  const experienceTypes = getExperienceTypes(data);
  let obj: any = [];

  experienceTypes.forEach((experience) => {
    const getAllAgesByExperienceType = data
      .filter((dataRow: any) => dataRow.years_of_experience === experience)
      .map((row: any) => {
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
    labels: obj.map((entry: any) => entry.experience),
    dataSets: obj.map((entry: any) => entry.average_age),
  };
};

export const getSalaryByIndustry = (data: any) => {
  const industries = getIndustryTypes(data);
  let obj: any = [];

  industries.forEach((industry) => {
    const getAllSalariesByIndustryType = data
      .filter((dataRow: any) => dataRow.industry === industry)
      .map((dataRow: any) => {
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
    labels: obj.map((entry: any) => entry.industryType),
    dataSets: obj.map((entry: any) => entry.average_salary),
  };
};

export const getSalaryByExperience = (data: any) => {
  const experienceTypes = getExperienceTypes(data);
  let obj: any = [];

  experienceTypes.forEach((experience) => {
    const getAllSalariesByExperience = data
      .filter((dataRow: any) => dataRow.years_of_experience === experience)
      .map((dataRow: any) => dataRow.salary);

    obj.push({
      experience: experience,
      average_salary: getAverage(getAllSalariesByExperience),
    });
  });

  return {
    labels: obj.map((entry: any) => entry.experience),
    dataSets: obj.map((entry: any) => entry.average_salary),
  };
};
