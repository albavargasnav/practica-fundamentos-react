import AdvertsPage from './components/adverts/AdvertsPage';
import './App.css';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import NewAdvertPage from './components/adverts/NewAdvertPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdvertPage from './components/adverts/AdvertPage';
import RequireAuth from './components/auth/RequireAuth';
import { AuthContext } from './components/auth/context';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  const authValue = {
    isLogged, // isLogged: isLogged
    onLogout: handleLogout,
    onLogin: handleLogin,
  };


  return <div className="app">
     <AuthContext.Provider value={authValue}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adverts" element={<AdvertsPage />} />
          <Route path="/adverts/:Id" element={<AdvertPage />} />
          <Route
            path="/adverts/new"
            element={
              <RequireAuth>
                <NewAdvertPage />
              </RequireAuth>
            }
          />
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route path="/404" element={<div>404 | Not found</div>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContext.Provider>
  </div>;
}

export default App;
