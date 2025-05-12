import React, { useState } from 'react';

const UserProfile = () => {
  // Initial object in state
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 25,
    city: 'New York',
  });

  // Function to update 2 properties
  const updateUser = () => {
    setUser(prevUser => ({
      ...prevUser,
      age: 30,
      city: 'Los Angeles',
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>City:</strong> {user.city}</p>

      <button onClick={updateUser}>Update Age & City</button>
    </div>
  );
};

export default UserProfile;
