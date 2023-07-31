import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MenuBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const isRouteActive = (route) => {
    return location.pathname === route;
  };

  // Step 1: State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Step 2: Function to handle opening and closing of the modal
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Step 4: Function to handle opening and closing of the dropdown menu
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Handle logout success if needed
      })
      .catch((error) => console.error(error));
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
      {user?.email ? (
        <>
        <li>
        <Link to='/dashboard' className={`block text-lg font-semibold font-Poppins ${location.pathname === '/dashboard' ? 'text-red-500' : 'text-black'}`}>Dashboard</Link>
       </li>
          <li>
            {/* Step 3: Remove button and add onClick event to the avatar div */}
            <div
              className="avatar"
              onClick={handleModalToggle}
              style={{ cursor: 'pointer' }} // Add cursor style to indicate it's clickable
            >
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} alt="Avatar" />
              </div>
            </div>
          </li>
        </>
      ) : (
        <li>
          <Link to='/login' className={`block text-lg font-semibold font-Poppins ${location.pathname === '/login' ? 'text-red-500' : 'text-black'}`}>Log In</Link>
        </li>
      )}
    </>
  );

  // Step 4: Add the modal component
  const Modal = () => {
    if (!isModalOpen) return null; // Don't render the modal if it's closed

    
   
  return (
    <div style={modalStyles} className='border border-gray-500 text-center rounded-lg'>
      <div className='p-4'>
      <div
            className="avatar"
            onClick={handleModalToggle}
            style={{ cursor: 'pointer' }} // Add cursor style to indicate it's clickable
          >
           
            <div className="w-16 rounded-full">
              <img src={user?.photoURL} alt="Avatar" />
            </div>
          </div>
        <h2 className='font-semibold font-Poppins text-xl my-1'>{user?.displayName}</h2>
        <div className='flex flex-col font-Poppins'>
        <button className='flex justify-center items-center py-1 font-bold rounded-md my-1 bg-red-500 hover:bg-gray-600 text-white' onClick={handleLogOut}>Log Out</button>
        <button className='text-xl'  onClick={handleModalToggle}>
          X
        </button>
        </div>
      </div>
    </div>
  );
};
const [modalStyles, setModalStyles] = useState({
  position: "absolute",
  backgroundColor: "white",
  top: "18.5%",
  right: "5%",
  /* Add more styles as needed for the modal */
});
useEffect(() => {
  const handleResize = () => {
    const mediumScreen = window.matchMedia('(max-width: 1023px)').matches;
    const smallScreen = window.matchMedia('(max-width: 767px)').matches;

   
    if (smallScreen) {
      setModalStyles({
        ...modalStyles,
        top: "100%",
        right: "5%",
      });
    } else if (mediumScreen) {
      setModalStyles({
        ...modalStyles,
        top: "100%",
        right: "5%",
      });
    } else {
      setModalStyles({
        ...modalStyles,
        top: "100%",
        right: "5%",
      });
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);

  

  return (
    <div className="relative z-10">
    <div className="navbar lg:px-24 bg-base-100 md:flex lg:flex md:justify-around lg:justify-around md:items-center lg:items-center border-b-2">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <button
            className="block lg:hidden text-lg font-semibold font-Poppins text-black mr-2"
            onClick={handleDropdownToggle}
          >
            {isDropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>
          {/* Step 5: Include the menu variable inside the dropdown-content */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
              isDropdownOpen ? 'block' : 'hidden'
            }`}
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="lg:text-3xl font-bold font-Poppins flex items-center">
          <p>
            <span className="text-red-500">LIFE </span>
            <span>SOURCE</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 text-lg flex items-center font-bold font-Poppins">
          {menu}
        </ul>
      </div>

      {/* Step 4: Render the modal */}
      <div className="modal-container">
        {user?.email && <Modal />}
      </div>
    </div>
  </div>
);
};

export default MenuBar;