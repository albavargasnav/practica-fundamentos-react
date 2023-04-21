import Button from '../shared/Button';

import logo, { ReactComponent as Icon } from '../../assets/pageicon.svg';

const Header = () => {
  return (
    <header>
      <div>
        {/* <img src={logo} alt="iconode-react" /> */}
        <Icon width="32" height="32" />
      </div>
      <nav>
        <Button variant="primary">Login</Button>
      </nav>
    </header>
  );
};

export default Header;