import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Update isLoggedIn state based on the presence of token
  }, []); // Run only once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <li className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="/">Home</Link>
          <Link to="/page1">Page-1</Link>
          <Link to="/page2">Page-2</Link>
          <Link to="/page3">Page-3</Link>
          {!isLoggedIn && (
            <>
              <Link to="/signup"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button></Link>
              <Link to="/login"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/"><button type="button" onClick={handleLogout}>Logout</button></Link>
              <Link to="/dashboard"><button type="button">Dashboard</button></Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
