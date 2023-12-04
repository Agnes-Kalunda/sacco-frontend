import React from "react";
import "./App.css";

const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Marketing Specialist" },
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Marketing Specialist" },
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Marketing Specialist" },
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Marketing Specialist" },
];

const Leadership = () => {
  console.log("Leadership component rendered");
  return (
    <div>
      <h2
        className="service"
        style={{ marginBottom: "10px", marginTop: "20px" , color: "#0096FF"}}
      >
        <strong>Below is Our able team</strong>
      </h2>
      <p>
        <small>The dream team</small>
      </p>
      <div className="employee-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <div className="employee-details">
              <h2>{employee.name}</h2>
              <p style={{ color: "green" }}>{employee.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
