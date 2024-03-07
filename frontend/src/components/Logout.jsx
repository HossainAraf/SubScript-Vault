import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <button onClick={handleLogout} type="button">
      Logout
    </button>
  );
};

export default Logout;
