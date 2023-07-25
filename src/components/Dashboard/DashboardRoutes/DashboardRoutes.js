import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin/useAdmin';

const DashboardRoutes = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const location = useLocation();

  const isRouteActive = (route) => {
    // Check if the given route matches the current route
    return location.pathname === route;
  };

  return (
    <div className='p-4'>
      <h1 className="text-2xl font-bold p-4 font-Poppins">Menu</h1>
      <ul className="space-y-2 px-4 py-2">
        {isAdmin && (
          <>
            <li>
              <Link to='/dashboard/donor' className={`block text-lg font-semibold font-Poppins ${isRouteActive('/dashboard/donor') ? 'text-red-500' : 'text-black'}`}>Approve Donor</Link>
            </li>
            <li>
              <Link to='/dashboard/addblog' className={`block text-lg font-semibold font-Poppins ${isRouteActive('/dashboard/addblog') ? 'text-red-500' : 'text-black'}`}>Add Blog</Link>
            </li>
            <li>
              <Link to='/dashboard/paymentuser' className={`block text-lg font-semibold font-Poppins ${isRouteActive('/dashboard/paymentuser') ? 'text-red-500' : 'text-black'}`}>Paid User</Link>
            </li>
          </>
        )}
        <li>
          <Link to='/dashboard/addreview' className={`block text-lg font-semibold font-Poppins ${isRouteActive('/dashboard/addreview') ? 'text-red-500' : 'text-black'}`}>Add Review</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardRoutes;