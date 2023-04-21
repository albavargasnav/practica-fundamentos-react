import AdvertsPage from './components/adverts/AdvertsPage';
import './App.css';
import Button from './components/shared/Button';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import NewAdvertPage from './components/adverts/NewAdvertPage';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return <div className="App">
     {isLogged ? (
        <>
        <AdvertsPage onLogout={handleLogout} />
        <NewAdvertPage />
      </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      {/* <Button variant="secondary" onClick={event => console.log(event)}>

        {/* Click me!
      </Button>
      <Button variant="primary" onClick={event => console.log(event)}>
        Click me!
      </Button>
      <Button variant="primary" disabled onClick={event => console.log(event)}>
        Click me!
      </Button> */}
  </div>;
}

export default App;
