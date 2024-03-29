import React, { useState } from 'react';
import '../styles/login.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.username || !formData.password) {
      setError('Please fill out all fields.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setIsLoading(false);
      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard';
      } else {
        setError(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form max-w-sm mx-auto">
      {error && (
        <div>
          <p className="error-text">{error}</p>
          <button onClick={handleCloseError} type="button" className="text-white bg-red-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Close</button>
        </div>
      )}
      <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#f5f5f4]">
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </label>
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#f5f5f4]">
          Password
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" disabled={isLoading} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{isLoading ? 'Loading..' : 'Login'}</button>
    </form>
  );
};

export default LoginForm;
