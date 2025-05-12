import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([
    { name: 'Alice', age: 28, salary: 50000, designation: 'Developer' },
    { name: 'Bob', age: 32, salary: 60000, designation: 'Designer' },
    { name: 'Charlie', age: 35, salary: 55000, designation: 'Manager' },
    { name: 'Diana', age: 25, salary: 48000, designation: 'QA' },
  ]);

  const updateEmployeeAtIndex2 = () => {
    const updatedEmployees = [...employees];
    updatedEmployees[2] = {
      ...updatedEmployees[2],
      name: 'Charles',
      age: 36,
      designation: 'Senior Manager'
    };
    setEmployees(updatedEmployees);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.age} - {emp.salary} - {emp.designation}
          </li>
        ))}
      </ul>
      <button onClick={updateEmployeeAtIndex2}>Update Index 2</button>
    </div>
  );
}

export default App;
