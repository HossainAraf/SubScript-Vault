import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    age: '',
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
    if (!formData.username || !formData.password || !formData.age) {
      setError('Please fill out all fields.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setIsLoading(false);
      console.log(data); // { message: 'User created' }
      // Optionally, you can redirect the user to a login page or display a success message
    } catch (error) {
      setIsLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="age">
          Age
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Signup'}
      </button>
    </form>
  );
};

export default SignupForm;
