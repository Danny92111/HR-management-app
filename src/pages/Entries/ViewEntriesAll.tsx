import {useEffect, useState} from 'react';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';
import {getEntries} from '../../helpers/apiRequests';
import {useSelector, useDispatch} from 'react-redux';
import {updateEntryAll, entrySingle} from '../../context/entriesSlice';
import {getHeadings} from '../../helpers/getHeadingsAndFormat';

const ViewEntriesAll = () => {
  const data: any = useSelector<any>((state) => state?.entries?.value);
  const [headings, setHeadings] = useState<string[] | []>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getEntries().then((response) => {
      const headings = getHeadings(response);
      setHeadings(headings);
      dispatch(updateEntryAll(response));
    });
  }, []);

  return (
    <section>
      <table>
        <TableHeader tableHeadings={headings} />
        <tbody>
          {data &&
            data.map((row: entrySingle, index: number) => (
              <TableRow
                key={index}
                headings={headings}
                tableRowData={row}
                viewEntry
                editEntry
              />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default ViewEntriesAll;
