import {entrySingle} from '../context/entriesSlice';

export const formatHeading = (heading: string) => {
  const headingFormated = heading.replaceAll('_', ' ');
  return headingFormated.charAt(0).toUpperCase() + headingFormated.slice(1);
};

export const getHeadings = (data: object[]): string[] => {
  const headingsArr: string[] = [];
  data.forEach((entry: entrySingle) => {
    Object.keys(entry).forEach((heading) => {
      if (!headingsArr.includes(heading)) {
        headingsArr.push(heading);
      }
    });
  });

  return headingsArr;
};
