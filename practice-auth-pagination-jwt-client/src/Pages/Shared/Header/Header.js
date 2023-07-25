import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   
    return (
      <div className="navbar bg-primary text-primary-content">
      <Link className="btn btn-ghost normal-case text-xl">Super Market</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/about'>About</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
    </div>
    
    );
};

export default Header;