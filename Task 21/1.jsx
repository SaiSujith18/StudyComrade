import React, { useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { name: "Alice", age: 28, salary: 50000, designation: "Developer" },
    { name: "Bob", age: 34, salary: 60000, designation: "Designer" },
    { name: "Charlie", age: 30, salary: 55000, designation: "Manager" },
    { name: "Diana", age: 25, salary: 48000, designation: "QA Engineer" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Data</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
