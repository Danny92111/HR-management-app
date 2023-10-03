import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>HR Management application</h1>
      <ul>
        <li>
          <Link to="/entries/view-all">Entries</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
