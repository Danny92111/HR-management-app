export const formatHeading = (heading: string) => {
  let headingFormated = heading.replaceAll('_', ' ');
  return headingFormated.charAt(0).toUpperCase() + headingFormated.slice(1);
};

export const getHeadings = (data: {}[]): string[] => {
  let headingsArr: string[] = [];
  data.forEach((entry: {}) => {
    Object.keys(entry).forEach((heading) => {
      if (!headingsArr.includes(heading)) {
        headingsArr.push(heading);
      }
    });
  });

  return headingsArr;
};
