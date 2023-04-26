import Button from '../shared/Button';

import logo, { ReactComponent as Icon } from '../../assets/pageicon.svg';
import { logout } from '../auth/service';
import classNames from 'classnames';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className={classNames('header', className)}>
     <Link to="/">
        <div className="header-logo">
          {/* <img src={logo} alt="advert-react" /> */}
          <Icon width="32" height="32" />
        </div>
      </Link>
      <nav className="header-nav">
      <NavLink
          to="/adverts/new"
          // className={({ isActive }) => (isActive ? 'selected' : '')}
          // style={({ isActive }) => (isActive ? { color: 'red' } : null)}
        >
          New Advert
        </NavLink>{' '}
        |
        <NavLink to="/adverts" end>
          See latest adverts
        </NavLink>
      {isLogged ? (
          <Button onClick={handleLogoutClick} className="header-button">
          Logout
        </Button>
        ) : (
          <Button variant="primary" className="header-button">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;