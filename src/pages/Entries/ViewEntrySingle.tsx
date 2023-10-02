import {useEffect, useState} from 'react';
import {getEntries} from '../../helpers/apiRequests';
import {useParams} from 'react-router-dom';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';
import {useSelector, useDispatch} from 'react-redux';
import {getHeadings} from '../../helpers/getHeadingsAndFormat';
import {updateEntryAll} from '../../context/entriesSlice';

type Props = {};

const ViewEntrySingle = (props: Props) => {
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
    <section>
      <table>
        <TableHeader tableHeadings={headings} />
        <tbody>
          {id && (
            <TableRow headings={headings} tableRowData={data[Number(id) - 1]} editEntry />
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ViewEntrySingle;
