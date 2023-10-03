import {formatHeading} from '../../helpers/getHeadingsAndFormat';

type Props = {
  tableHeadings: string[];
};

const TableHeader = ({tableHeadings}: Props) => {
  return (
    <thead>
      <tr>
        {tableHeadings.map((heading, index) => (
          <th key={index} className={`${heading}-header`}>
            {formatHeading(heading)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
