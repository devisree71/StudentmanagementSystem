import React from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const Studentdata = [
  {
    id: 1,
    firstname: "Akhila",
    regdno:"21b01a1201",
    email: "abc@gmail.com",
    number: "8732456789",
    department: "IT",
  },
  {
    id: 2,
    firstname: "Krishna",
    regdno:"21b01a1202",
    email: "def@gmail.com",
    number: "8989674598",
    department: "CSE",
  },
  {
    id: 3,
    firstname: "Satya",
    regdno:"21b01a1203",
    email: "hgj@gmail.com",
    number: "8956438987",
    department: "CSE",
  },
  {
    id: 4,
    firstname: "Madhuri",
    regdno:"21b01a1204",
    email: "kiyuy@gmail.com",
    number: "9673258997",
    department: "CSE",
  },
];

const courses = [
  {
    id: 1,
    department: "IT",
    regstudent: 70,
  },
  {
    id: 2,
    department: "CSE",
    regstudent: 70,
  },
  {
    id: 3,
    department: "Civil",
    regstudent: 50,
  },
  {
    id: 4,
    department: "ECE",
    regstudent: 50,
  },
  {
    id: 5,
    department: "Mech",
    regstudent: 50,
  },
  {
    id: 6,
    department: "AI & DS",
    regstudent: 50,
  },
  {
    id: 3,
    department: "AI & ML",
    regstudent: 50,
  },
  {
    id: 3,
    department: "EEE",
    regstudent: 50,
  },
];

const Studentdetails = () => {
  const studet = useParams();
  
  const navigate = useNavigate();
  return (
    <div className="stupg">
      <h2 className="head">Student Details</h2>
      <div>
        {Studentdata.filter((item, index) => studet.id == item.id).map(
          (item, index) => {
            return (
              <div key={index}>
                <p>
                  <b>Name : </b>
                  {item.firstname}
                </p>
                <p>
                  <b>Regno: </b>
                  {item.regdno}
                </p>
                <p>
                  <b>Email : </b>
                  {item.email}
                </p>
                <p>
                  <b>Mobile no : </b>
                  {item.number}
                </p>
                <p>
                  <b>Department : </b>
                  {item.department}
                </p>
                <button  class="lb" onClick={()=>{navigate(-1)}}><i class="arrow circle left icon"></i></button>&nbsp;
                <button  class="rb"onClick={()=>{navigate(+1)}}><i class="arrow circle right icon"></i></button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Studentdetails;
