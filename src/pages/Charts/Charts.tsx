import React, {useEffect, useState} from 'react';
import {getEntries} from '../../helpers/apiRequests';
import {useSelector, useDispatch} from 'react-redux';
import {updateEntryAll, updateEntrySingle} from '../../context/entriesSlice';
type Props = {};

const Charts = (props: Props) => {
  const data = useSelector<any>((state) => state?.entries?.value);
  const dispatch = useDispatch();

  setInterval(() => console.log(data), 3000);
  useEffect(() => {
    const data = getEntries().then((response) => dispatch(updateEntryAll(response)));
  }, []);

  return <div>Charts</div>;
};

export default Charts;
