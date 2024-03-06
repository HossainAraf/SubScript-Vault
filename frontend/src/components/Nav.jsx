import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/signup"><div>Sign Up</div></Link>
        <Link to="/login"><div>Login</div></Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
