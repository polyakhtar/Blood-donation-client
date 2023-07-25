import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MenuBar = () => {
  const {user,logOut}=useContext(AuthContext);
  const location=useLocation();
  const isRouteActive = (route) => {
    return location.pathname === route;
  };
  const handleLogOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>console.error(error))
  };
  const menu = (
    <>
      <li>
      <Link to='/' className={`block text-lg font-semibold font-Poppins ${isRouteActive('/') ? 'text-red-500' : 'text-black'}`}>Home</Link>
      </li>
      <li>
      <Link to='/donor' className={`block text-lg font-semibold font-Poppins ${isRouteActive('/donor') ? 'text-red-500' : 'text-black'}`}>Donor</Link>
      </li>
      <li>
      <Link to='/blog' className={`block text-lg font-semibold font-Poppins ${location.pathname === '/blog' ? 'text-red-500' : 'text-black'}`}>Blog</Link>
      </li>
      <li><Link to='/contact' className={`block text-lg font-semibold font-Poppins ${location.pathname === '/contact' ? 'text-red-500' : 'text-black'}`}>Contact</Link></li>
      <li>
      <Link to='/aboutUs' className={`block text-lg font-semibold font-Poppins ${location.pathname === '/aboutUs' ? 'text-red-500' : 'text-black'}`}>About Us</Link>
      </li>
      <li>
      <Link to='/dashboard' className={`block text-lg font-semibold font-Poppins ${location.pathname === '/dashboard' ? 'text-red-500' : 'text-black'}`}>Dashboard</Link>
      </li>
      {
       user?.email ?
       <>
         <li><button className='block text-lg font-semibold font-Poppins' onClick={handleLogOut}>Log Out</button></li>
       </>
       :
       <li>
        <Link to='/login' className={`block text-lg font-semibold font-Poppins ${location.pathname === '/login' ? 'text-red-500' : 'text-black'}`}>Log In</Link>
       </li>
      }
    </>
  );
    return (
      <div className="navbar lg:px-24 bg-base-100 md:flex lg:flex md:justify-around lg:justify-around md:items-center lg:items-center border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menu}
          </ul>
        </div>
        <Link to='/' className=" lg:text-3xl font-bold font-Poppins flex items-center">
          <p className=''>
        <span className='text-red-500'>LIFE </span>   
         <span>SOURCE</span>
          </p>
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 text-lg font-bold font-Poppins">
          {menu}
        </ul>
      </div>
    </div>
   
    );
};

export default MenuBar;