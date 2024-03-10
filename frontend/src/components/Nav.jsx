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
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {!isLoggedIn && (
            <>
              <Link to="/signup"><button type="button">Sign Up</button></Link>
              <Link to="/login"><button type="button">Login</button></Link>
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
