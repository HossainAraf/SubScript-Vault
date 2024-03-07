import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  useEffect(() => {
    // Get the buttons
    const signupButton = document.getElementById('signup-btn');
    const loginButton = document.getElementById('login-btn');
    const logoutButton = document.getElementById('logout-btn');

    // Get the token
    const token = localStorage.getItem('token');

    // If the token exists, show the logout button, otherwise show the signup and login buttons
    if (token) {
      logoutButton.style.display = 'block';
      signupButton.style.display = 'none';
      loginButton.style.display = 'none';
    } else {
      logoutButton.style.display = 'none';
      signupButton.style.display = 'block';
      loginButton.style.display = 'block';
    }
  }, []); // Run only once when the component mounts

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/signup"><button id="signup-btn" type="button">Sign Up</button></Link>
          <Link to="/login"><button id="login-btn" type="button">Login</button></Link>
          <Link to="/logout"><button id="logout-btn" type="button">Logout</button></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
