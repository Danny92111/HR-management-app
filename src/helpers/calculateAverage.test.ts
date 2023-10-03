import {
  getAgeByIndustry,
  getAgeByExperience,
  getSalaryByIndustry,
  getSalaryByExperience,
} from './calculateAverage';

import mockData from '../mockData/entriesMock.json';

jest.mock('./getAge');
jest.mock('../context/entriesSlice');

describe('getAgeByIndustry', () => {
  it('should expose a function', () => {
    expect(getAgeByIndustry).toBeDefined();
  });

  it('getAgeByIndustry should return expected output', () => {
    const retValue = getAgeByIndustry(mockData);
    expect(retValue).toBeTruthy();
  });
});
describe('getAgeByExperience', () => {
  it('should expose a function', () => {
    expect(getAgeByExperience).toBeDefined();
  });

  it('getAgeByExperience should return expected output', () => {
    const retValue = getAgeByExperience(mockData);
    expect(retValue).toBeTruthy();
  });
});
describe('getSalaryByIndustry', () => {
  it('should expose a function', () => {
    expect(getSalaryByIndustry).toBeDefined();
  });

  it('getSalaryByIndustry should return expected output', () => {
    const retValue = getSalaryByIndustry(mockData);
    expect(retValue).toBeTruthy();
  });
});
describe('getSalaryByExperience', () => {
  it('should expose a function', () => {
    expect(getSalaryByExperience).toBeDefined();
  });

  it('getSalaryByExperience should return expected output', () => {
    const retValue = getSalaryByExperience(mockData);
    expect(retValue).toBeTruthy();
  });
});
