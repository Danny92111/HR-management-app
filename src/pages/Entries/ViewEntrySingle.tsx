import {useParams} from 'react-router-dom';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';
import {useSelector} from 'react-redux';
import {getHeadings} from '../../helpers/getHeadingsAndFormat';

type Props = {};

const ViewEntrySingle = (props: Props) => {
  const {id} = useParams();
  const data: any = useSelector<any>((state) => state?.entries?.value);
  const headings = getHeadings(data);

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
