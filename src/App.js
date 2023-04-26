import AdvertsPage from './components/adverts/AdvertsPage';
import './App.css';
import LoginPage from './components/auth/LoginPage';
import NewAdvertPage from './components/adverts/NewAdvertPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdvertPage from './components/adverts/AdvertPage';
import RequireAuth from './components/auth/RequireAuth';
import { AuthContext } from './components/auth/context';



function App() {
  return ( 
    <div className="app">
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
        <Route path="/" element={<Navigate to="/tweets" />} />
        <Route path="/404" element={<div>404 | Not found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
  </div>
  );
}

export default App;
