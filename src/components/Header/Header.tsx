import {Link} from 'react-router-dom';

type Props = {};

const Header = ({}: Props) => {
  return (
    <header>
      <h1>Main Title</h1>
      <ul>
        <li>
          <Link to="/">Entries</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
