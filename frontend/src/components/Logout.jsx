import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <button id="logout-btn" onClick={handleLogout} type="button">
      Logout
    </button>
  );
};

export default Logout;
