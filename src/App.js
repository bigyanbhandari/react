import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import "./Styles/Nav.css";
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import HOME from './Components/HOME';

function App() {
  const [currentForm, setCurrentForm]= useState('Login');

  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div>
      <Navbar/>
      
      
     
    <div className="App">
      {
        currentForm== "Login"? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
     </div>
    </div>
  );
}

export default App;
