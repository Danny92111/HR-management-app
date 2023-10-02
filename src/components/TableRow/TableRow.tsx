import React from 'react';
import {entrySingle} from '../../context/entriesSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom';
import {useNavigate, useParams, useLocation} from 'react-router-dom';

type Props = {
  headings: string[];
  tableRowData: any;
  viewEntry?: boolean;
  editEntry?: boolean;
};

const TableRow = ({headings, tableRowData, viewEntry, editEntry}: Props) => {
  return (
    <tr>
      {headings.map((heading: string) => (
        <td>{tableRowData[heading]}</td>
      ))}
      {viewEntry && (
        <td>
          <Link to={`/entries/view-single/${tableRowData.id}`}>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Link>
        </td>
      )}
      {editEntry && (
        <td>
          <Link to={`/entries/edit/${tableRowData.id}`}>
            <EditIcon></EditIcon>
          </Link>
        </td>
      )}
    </tr>
  );
};

export default TableRow;
