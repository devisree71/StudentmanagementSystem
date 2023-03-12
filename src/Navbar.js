import React from 'react';
import './App.css';
import {NavLink,useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div className='navb'>
                <NavLink to="/"  className="navitem"><i className="graduation cap icon"></i></NavLink>
            <NavLink to="students"  className="navitem">Students</NavLink>    
            <NavLink to="courses"  className="navitem">Courses</NavLink>                  
            <NavLink to="grades"  className="navitem">Grades</NavLink>
            <button onClick={()=>{navigate('/login')}}>Login</button> 
            
            </div>
        </div>
    );
};

export default Navbar;