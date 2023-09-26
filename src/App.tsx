import React, { useEffect } from 'react';
import RoutePath from './routes/RoutePath';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import { useCompanies } from './providers/CompanyProvider';

function App() {
  const location = useLocation();
  const currentPath = location.pathname

  return (
    <div className='flex flex-col'>
      {(currentPath !== "/login" && currentPath !== "/" && currentPath !== "/signup")  ? <Navbar /> : null}
      <RoutePath />
    </div>
  );
}

export default App;
