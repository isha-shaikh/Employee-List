import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Isha",
      designation: "Developer",
      salary: 50000,
      city: "Solapur",
    },
    {
      id: 2,
      name: "Athrava",
      designation: "Designer",
      salary: 45000,
      city: "Solapur",
    },
    {
      id: 3,
      name: "Rudresh",
      designation: "Developer",
      salary: 48000,
      city: "Solapur",
    },
    {
      id: 4,
      name: "Priya",
      designation: "Tester",
      salary: 40000,
      city: "Solapur",
    },
    {
      id: 5,
      name: "Snehal",
      designation: "Developer",
      salary: 52000,
      city: "Solapur",
    },
    {
      id: 6,
      name: "Vaishanvi",
      designation: "Designer",
      salary: 47000,
      city: "Solapur",
    },
    {
      id: 7,
      name: "Saniya",
      designation: "Tester",
      salary: 42000,
      city: "Solapur",
    },
    {
      id: 8,
      name: "Aqib",
      designation: "Developer",
      salary: 53000,
      city: "Solapur",
    },
    {
      id: 8,
      name: "sana",
      designation: "Developer",
      salary: 53000,
      cty: "Solapur",
    },
    {
      id: 9,
      name: "Sabiya",
      designation: "Designer",
      salary: 46000,
      city: "Solapur",
    },
    {
      id: 10,
      name: "sameer",
      designation: "Tester",
      salary: 41000,
      city: "Solapur",
    },
    {
      id: 11,
      name: "Aditya",
      designation: "DevOps Eng ",
      salary: 460000,
      city: "Solapur",
    },
    // { id: 12, 
    //   name: "Isha", 
    //   designation: "SDE",
    //    salary: 500000,
    //    city:"Solapur"
    // },
  ]);

  const handlePromote = () => {
    const updatedEmployees = employees.map((employee) => ({
      ...employee,
      designation: "Senior " + employee.designation,
      salary: employee.salary * 1.3,
      city: "puna",
      // increase the salary by 30%
    }));
    setEmployees(updatedEmployees);
  };

  const handleHike = () => {
    const updatedEmployees = employees.map((employee) => ({
      ...employee,
      salary: employee.salary * 1.2, //salary will be increase by 20%
    }));
    setEmployees(updatedEmployees);
  };
  // const handleTransfer = () => {
  //   const updatedEmployees = employees.map((employee) => ({
  //     ...employee,
  //     city: employee.city,
  //   }));
  //   setEmployees(updatedEmployees);
  // };
  return (
    <div className="container mt-5">
      <div className="row">
        <h2>Employee list</h2>
        {employees.map((employee) => (
          <div key={employee.id} className="col-md-4 mb-4">
            <Card className="employee-card">
              <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {employee.designation}
                </Card.Subtitle>
                <Card.Text>Salary: ₹{employee.salary.toFixed(2)}</Card.Text>
                <Card.Text>city:{employee.city}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="buttons-container">
        <Button
          variant="primary"
          className="promote-button"
          onClick={handlePromote}
        >
          Promote All
        </Button>
        <Button variant="success" className="hike-button" onClick={handleHike}>
          Hike All
        </Button>
        {/* <Button variant="success" className="hike-button" onClick={handleTransfer}>
          Transfer
        </Button> */}
      </div>
    </div>
  );
};

export default EmployeeList;
