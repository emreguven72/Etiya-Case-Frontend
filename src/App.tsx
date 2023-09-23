import React, { useEffect } from 'react';
import RoutePath from './routes/RoutePath';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const currentPath = location.pathname

  useEffect(() => {
    console.log(currentPath);
  }, [])
  

  return (
    <div className='flex flex-col'>
      {(currentPath !== "/login" && currentPath !== "/")  ? <Navbar /> : null}
      <RoutePath />
    </div>
  );
}

export default App;
