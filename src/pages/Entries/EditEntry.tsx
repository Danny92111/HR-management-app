import {useEffect, useState} from 'react';
import {getEntries} from '../../helpers/apiRequests';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getHeadings} from '../../helpers/getHeadingsAndFormat';
import TableRowEditable from '../../components/TableRowEditable/TableRowEditable';
import {updateEntryAll} from '../../context/entriesSlice';

type Props = {};

const EditEntry = (props: Props) => {
  const {id} = useParams();
  const data: any = useSelector<any>((state) => state?.entries?.value);
  const [headings, setHeadings] = useState<string[] | []>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length == 0) {
      getEntries().then((response) => {
        const headings = getHeadings(response);
        setHeadings(headings);
        dispatch(updateEntryAll(response));
      });
    } else {
      const headings = getHeadings(data);
      setHeadings(headings);
    }
  }, []);

  return (
    <section className="edit-entry-section">
      {id && data.length != 0 && (
        <TableRowEditable headings={headings} tableRowData={data[Number(id) - 1]} />
      )}
      <button>Submit</button>
    </section>
  );
};

export default EditEntry;
