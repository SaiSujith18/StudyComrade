import React, { useState } from 'react';

const LoginForm = () => {
  // Step 1: State to store form fields and validation messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Step 3: Validate the form fields
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex for email validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return false;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData({ email, password });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          style={{ marginBottom: '10px' }}
        /><br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          style={{ marginBottom: '10px' }}
        /><br />
        <button type="submit">Login</button>
      </form>

      {/* Displaying Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Displaying Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>User Data:</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
