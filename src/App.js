// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null)

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode'
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
    }
  }

  return (
    <>
      <Navbar title= "TextUtils" aboutText= "About Us" mode= {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below:" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
