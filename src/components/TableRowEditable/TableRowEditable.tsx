import React, {useState} from 'react';
import {entrySingle} from '../../context/entriesSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom';
import {useNavigate, useParams, useLocation} from 'react-router-dom';
import {formatHeading} from '../../helpers/getHeadingsAndFormat';
import {useSelector, useDispatch} from 'react-redux';
import {updateEntryAll} from '../../context/entriesSlice';
import {updateEntry} from '../../helpers/apiRequests';

type Props = {
  headings: string[];
  tableRowData: any;
};

const TableRowEditable = ({headings, tableRowData}: Props) => {
  const [formData, setFormData] = useState(tableRowData);
  const data: any = useSelector<any>((state) => state?.entries?.value);
  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    const {name, value} = event.target;
    setFormData((prevState: any) => ({...prevState, [name]: value}));
  };

  const handleSubmit = (event: any) => {
    let newData = data.map((entry: any) => {
      return {...entry};
    });
    newData[tableRowData.id - 1] = formData;
    dispatch(updateEntryAll(newData));
    updateEntry(newData);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {headings.map((heading: string) => {
        return (
          <div>
            <label htmlFor={heading}>{formatHeading(heading)}</label>
            <input
              id={heading}
              name={heading}
              value={formData[heading]}
              onChange={handleInputChange}
            />
            {/* <p>Error message</p> */}
          </div>
        );
      })}
    </form>
  );
};

export default TableRowEditable;
