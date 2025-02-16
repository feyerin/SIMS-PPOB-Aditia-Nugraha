import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './organs/navbar';

const Layout = () => {
  const token = localStorage.getItem("token"); // Ambil token dari localStorage

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Navbar/>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;