import React, {useEffect, useState} from 'react';
import Table from '../../components/TableBody/TableBody';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';
import {getEntries} from '../../helpers/apiRequests';
import {useSelector, useDispatch} from 'react-redux';
import {updateEntryAll, updateEntrySingle} from '../../context/entriesSlice';

type Props = {};

type HeadingsProps = {
  headings: string[];
  headingsFormated: string[];
};

const headingFormatted = (heading: string) => {
  let headingFormated = heading.replaceAll('_', ' ');
  return headingFormated.charAt(0).toUpperCase() + headingFormated.slice(1);
};
const getHeadingsAndFormat = (data: {}[]): HeadingsProps => {
  let headingsArr: string[] = [];
  let headingsFormatedArr: string[] = [];
  data.forEach((entry: {}) => {
    Object.keys(entry).forEach((heading) => {
      if (!headingsArr.includes(heading)) {
        headingsArr.push(heading);
        headingsFormatedArr.push(headingFormatted(heading));
      }
    });
  });

  return {
    headings: headingsArr,
    headingsFormated: headingsFormatedArr,
  };
};

const ViewEntriesAll = (props: Props) => {
  const data: any = useSelector<any>((state) => state?.entries?.value);
  const [headings, setHeadings] = useState<string[] | []>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getEntries().then((response) => {
      const {headings} = getHeadingsAndFormat(response);
      setHeadings(headings);
      dispatch(updateEntryAll(response));
    });
  }, []);

  return (
    <table>
      <TableHeader tableHeadings={headings} />
      {data.map((row: any) => (
        <TableRow headings={headings} tableRowData={row} />
      ))}
    </table>
  );
};

export default ViewEntriesAll;
