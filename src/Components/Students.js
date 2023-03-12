import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Studentdata = [
  {
    id: 1,
    firstname: "Akhila",
    email: "abc@gmail.com",
    number: "1234567898",
    department: "IT",
  },
  {
    id: 2,
    firstname: "Krishna",
    email: "def@gmail.com",
    number: "1234567898",
    department: "CSE",
  },
  {
    id: 3,
    firstname: "Satya",
    email: "def@gmail.com",
    number: "1234567898",
    department: "CSE",
  },
  {
    id: 4,
    firstname: "Madhuri",
    email: "def@gmail.com",
    number: "1234567898",
    department: "CSE",
  },
];

const Students = () => {
  const [showStudents, setShowStudents] = useState();

  const toggleStudents = () => {
    setShowStudents(!showStudents);
  };

  return (
    <div className="studentpg">
      <div className="navg">
        <button onClick={toggleStudents}>
          <i class="address card outline icon"></i>Studenlists
        </button>
      </div>

      {showStudents && (
        <div className="studentpg2">
          {Studentdata.map((item) => {
            return (
              <div className="info" key={item.id}>
                <Link to={`/students/${item.id}`} className="navlink">
                  {item.firstname}
                </Link>
              </div>
            );
          })}
        </div>
      )}
      <div className="details">
        <Outlet />
      </div>
    </div>
  );
};

export default Students;
