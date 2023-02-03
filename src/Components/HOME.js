import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Teacher from '../pages/Teacher';
import Student from '../pages/Student';
import ContactUs from '../pages/ContactUs';


const HOME = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li> 
              <Link to="/Home">Homepage</Link>
              </li>
              <li>
              <Link to="/Admin">Admin</Link>
              </li>
              <li>
              <Link to="/Teacher">Teacher</Link>
              </li>
              <li>
              <Link to="/Student">Student</Link>
              </li>
              <li>
              <Link to="/Contact US">Contact Us</Link>
              </li>
          </ul>
        </nav>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path='Admin' element={<Admin/>}/>
          <Route path='Teacher' element={<Teacher/>}/>
          <Route path='Student' element={<Student/>}/>
          <Route path='ContactUs' element={<ContactUs/>}/>
          
        </Routes>

      </Router>
    </div>
  )
}

export default HOME;
