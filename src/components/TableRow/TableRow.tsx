import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom';

type Props = {
  headings: string[];
  tableRowData: any;
  viewEntry?: boolean;
  editEntry?: boolean;
  inactive?: boolean;
};

const TableRow = ({headings, tableRowData, viewEntry, editEntry, inactive}: Props) => {
  return (
    <tr>
      {headings.map((heading, index) =>
        heading === 'id' ? (
          <th key={index} scope="row">
            {tableRowData[heading]}
          </th>
        ) : (
          <td key={index} className={`${heading}-row`}>
            {tableRowData[heading]}
          </td>
        ),
      )}
      {viewEntry && (
        <td className={`row-view-entry ${inactive && 'inactive'}`}>
          <Link to={`/entries/view-single/${tableRowData?.id}`}>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Link>
        </td>
      )}
      {editEntry && (
        <td className="row-edit-entry">
          <Link to={`/entries/edit/${tableRowData?.id}`}>
            <EditIcon></EditIcon>
          </Link>
        </td>
      )}
    </tr>
  );
};

export default TableRow;
