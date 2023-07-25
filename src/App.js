import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import About from './About';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
const [mode , setMode]=useState('light')
const [alert,setAlert]=useState(null)

const showalert=(message , type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}   
const toggleMode=()=>{
  if(mode==="light"){
  setMode("dark")
  document.body.style.backgroundColor="#022548"
  showalert("Dark Mode has been Enabled" , "success")
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
    showalert("Light Mode has been Enabled" , "success")
  }
}
  return (
    <>
    <Navbar mode={mode} title='TextUtils' aboutText="About TextUtils" toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Router>
<Navbar mode={mode} title='TextUtils' aboutText="About TextUtils" toggleMode={toggleMode}/>
<Alert alert={alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter your text here : " mode={mode} showalert={showalert}/>} />
        </Routes>
      </div>
   </Router> */}
   <TextForm heading="Enter your text here : " mode={mode} showalert={showalert}/>
    </>
  );
}

export default App;
