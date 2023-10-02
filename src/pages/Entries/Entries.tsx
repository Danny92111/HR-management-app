useEffect;
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

type Props = {};

const Entries = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('entries/view-all');
  }, []);

  return <section>Entries</section>;
};

export default Entries;
