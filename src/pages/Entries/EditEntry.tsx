import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getHeadings} from '../../helpers/getHeadingsAndFormat';
import TableRowEditable from '../../components/TableRowEditable/TableRowEditable';

type Props = {};

const EditEntry = (props: Props) => {
  const {id} = useParams();
  const data: any = useSelector<any>((state) => state?.entries?.value);
  const headings = getHeadings(data);

  return (
    <section className="edit-entry-section">
      {id && <TableRowEditable headings={headings} tableRowData={data[Number(id) - 1]} />}
      <button>Submit</button>
    </section>
  );
};

export default EditEntry;
