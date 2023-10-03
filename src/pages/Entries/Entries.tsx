import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Entries = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('entries/view-all');
  }, []);

  return <section>Entries</section>;
};

export default Entries;
