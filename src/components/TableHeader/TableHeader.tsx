import {formatHeading} from '../../helpers/getHeadingsAndFormat';

type Props = {
  tableHeadings: string[];
};

const TableHeader = ({tableHeadings}: Props) => {
  return (
    <thead>
      <tr>
        {tableHeadings.map((heading, index) => (
          <th scope="col" key={index} className={`${heading}-header`}>
            {formatHeading(heading)}
          </th>
        ))}
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
