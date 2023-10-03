import React, {useState} from 'react';
import {updateEntryAll, entrySingle, entriesAll} from '../../context/entriesSlice';
import {formatHeading} from '../../helpers/getHeadingsAndFormat';
import {useSelector, useDispatch} from 'react-redux';
import {updateEntry} from '../../helpers/apiRequests';

type Props = {
  headings: string[];
  tableRowData: entrySingle;
};

const TableRowEditable = ({headings, tableRowData}: Props) => {
  const [formData, setFormData] = useState<any>(tableRowData);
  const data = useSelector((state: entriesAll) => state);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData((prevState: any) => ({...prevState, [name]: value}));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!data) {
      return;
    }
    const newData: entriesAll = data.map((entry) => {
      return {...entry};
    });
    newData[tableRowData?.id - 1] = formData;
    dispatch(updateEntryAll(newData));
    updateEntry(newData);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {headings.map((heading, index) => {
        return (
          <div key={index} className={`${heading}-editable`}>
            <label htmlFor={heading}>{formatHeading(heading)}</label>
            <input
              id={heading}
              name={heading}
              value={formData[heading]}
              onChange={handleInputChange}
            />
          </div>
        );
      })}
    </form>
  );
};

export default TableRowEditable;
