import React, {useState} from 'react';
import {updateEntryAll, entrySingle, entriesAll} from '../../context/entriesSlice';
import {formatHeading} from '../../helpers/getHeadingsAndFormat';
import {useSelector, useDispatch} from 'react-redux';
import {updateEntry} from '../../helpers/apiRequests';
import {getRegex} from '../../helpers/regexes';

type Props = {
  headings: string[];
  tableRowData: entrySingle;
};

const TableRowEditable = ({headings, tableRowData}: Props) => {
  const [formData, setFormData] = useState<any>(tableRowData);
  const data: any = useSelector<any>((state) => state?.entries?.value);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData((prevState: any) => ({...prevState, [name]: value}));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formDataValues = Object.values(formData);
    if (formDataValues.filter(Boolean).length !== formDataValues.length) {
      alert('Please fill in the empty values');
      return;
    }
    if (!data) {
      return;
    }
    const newData: entriesAll = data.map((entry) => {
      return {...entry};
    });
    newData[tableRowData?.id - 1] = formData;
    dispatch(updateEntryAll(newData));
    updateEntry(newData);

    alert('Your changes have been saved');
  };

  const validateInput = (event: React.FocusEvent<HTMLInputElement>, heading: string) => {
    const value = event.target.value;
    const RexExp = getRegex(heading);
    const isMatched = value && RexExp.test(value);
    if (!isMatched) {
      alert(`The input value for ${formatHeading(heading)} is invalid.`);
    }
  };
  return (
    <form>
      <div className="edit-entry-container">
        {headings.map((heading, index) => {
          return (
            <div key={index} className={`${heading}-editable`}>
              <label htmlFor={heading}>{formatHeading(heading)}</label>
              <input
                id={heading}
                name={heading}
                value={formData[heading]}
                onChange={handleInputChange}
                onBlur={(e) => validateInput(e, heading)}
                required
              />
            </div>
          );
        })}
      </div>
      <button onClick={handleSubmit} type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default TableRowEditable;
