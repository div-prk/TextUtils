import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// let name = "Divyy";
function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
    {/* <Router> */}
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path='/about' element={<About/>}/> */}
          
          {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze." mode = {mode}/>}/> */}
        {/* </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze." mode = {mode}/>
      
      
      </div>
      {/* </Router> */}
    </>

  );
}

export default App;
