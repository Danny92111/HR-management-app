import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>HR Management application</h1>
      <ul>
        <li>
          <NavLink
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
            to="/entries/view-all"
          >
            Entries
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
            to="/charts"
          >
            Charts
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
