import React from 'react';

type Props = {
  tableHeadings: string[];
};

const TableHeader = ({tableHeadings}: Props) => {
  return (
    <tr>
      {tableHeadings.map((heading) => (
        <th>{heading}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
