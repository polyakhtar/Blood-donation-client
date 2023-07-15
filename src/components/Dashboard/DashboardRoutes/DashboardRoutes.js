import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin/useAdmin';
// admin email: poly6541@gmail.com
// admin pass : Poly6541@
const DashboardRoutes = () => {
  const {user}=useContext(AuthContext);
  const [isAdmin]=useAdmin(user?.email);
    return (
        <div className='p-4'>
           <h1 className="text-2xl font-bold p-4 font-Poppins">Menu</h1>
          <ul className="space-y-2 px-4 py-2">
            {
              isAdmin && <>
               <li>
              <Link to='/dashboard/donor' className="block text-blue-500 text-lg font-semibold font-Poppins">Approve Donor</Link>
            </li>
            <li>
              <Link to='/dashboard/addblog' className="block text-lg font-semibold text-blue-500 font-Poppins">Add Blog</Link>
            </li>
              </>
            }
           
            <li>
              <Link to='/dashboard/addreview' className="block text-lg font-semibold text-blue-500 hover:underline font-Poppins">Add Review</Link>
            </li>
          </ul> 
        </div>
    );
};

export default DashboardRoutes;