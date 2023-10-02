import React, {useEffect, useState} from 'react';
import {getEntries} from '../../helpers/apiRequests';
import {useSelector, useDispatch} from 'react-redux';
import {updateEntryAll} from '../../context/entriesSlice';
type Props = {};

const Charts = (props: Props) => {
  const data = useSelector<any>((state) => state?.entries?.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getEntries().then((response) => dispatch(updateEntryAll(response)));
  }, []);

  return <section>Charts</section>;
};

export default Charts;
