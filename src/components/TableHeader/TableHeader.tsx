import React from 'react';
import {formatHeading} from '../../helpers/getHeadingsAndFormat';

type Props = {
  tableHeadings: string[];
};

const TableHeader = ({tableHeadings}: Props) => {
  return (
    <thead>
      <tr>
        {tableHeadings.map((heading) => (
          <th>{formatHeading(heading)}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
