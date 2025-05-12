import React, { useState } from 'react';

const DataTypesExample = () => {
  // 🔢 Number
  const [count, setCount] = useState(0);

  // 🔤 String
  const [name, setName] = useState('Alice');

  // ✅ Boolean
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 📦 Object
  const [user, setUser] = useState({ id: 1, role: 'admin' });

  // 📋 Array
  const [items, setItems] = useState(['apple', 'banana']);

  // 🚫 Null
  const [profile, setProfile] = useState(null);

  // ❓ Undefined (not recommended in state, but shown for completeness)
  const [undefinedValue, setUndefinedValue] = useState(undefined);

  return (
    <div style={{ padding: '20px' }}>
      <h2>React State Data Types</h2>

      <div>
        <h4>Number:</h4>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <h4>String:</h4>
        <p>{name}</p>
        <button onClick={() => setName('Bob')}>Change Name</button>
      </div>

      <div>
        <h4>Boolean:</h4>
        <p>{isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      </div>

      <div>
        <h4>Object:</h4>
        <p>ID: {user.id}, Role: {user.role}</p>
        <button onClick={() => setUser({ ...user, role: 'user' })}>Change Role</button>
      </div>

      <div>
        <h4>Array:</h4>
        <ul>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <button onClick={() => setItems([...items, 'orange'])}>Add Item</button>
      </div>

      <div>
        <h4>Null:</h4>
        <p>{profile === null ? 'No profile' : JSON.stringify(profile)}</p>
        <button onClick={() => setProfile({ name: 'Jane', age: 30 })}>Set Profile</button>
      </div>

      <div>
        <h4>Undefined:</h4>
        <p>{undefinedValue === undefined ? 'Undefined' : undefinedValue}</p>
        <button onClick={() => setUndefinedValue('Now Defined')}>Define It</button>
      </div>
    </div>
  );
};

export default DataTypesExample;
