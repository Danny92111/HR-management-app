import React from 'react';
import {entrySingle} from '../../context/entriesSlice';

type Props = {
  headings: string[];
  tableRowData: any;
};

const TableRow = ({headings, tableRowData}: Props) => {
  return (
    <tr>
      {headings.map((heading: string) => (
        <td>{tableRowData[heading]}</td>
      ))}
    </tr>
  );
};

export default TableRow;
