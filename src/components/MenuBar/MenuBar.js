import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ProfileModal from '../ProfileModal/ProfileModal';
const MenuBar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>console.error(error))
  }
 
  const menu = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/donor'>Donor</Link></li>
      <li><Link to='blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/aboutUs'>About Us</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      {
        user?.email ?
          <>
            <li><button onClick={()=>handleLogOut()}>Log Out</button></li>
          </>
          :
          <li><Link to='/login'>Log in</Link></li>
      }
    </>
  );
    return (
      <div className="navbar bg-base-100 md:flex lg:flex md:justify-around lg:justify-around md:items-center lg:items-center border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menu}
          </ul>
        </div>
        <Link to='/' className=" text-3xl font-bold font-Poppins flex items-center">
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