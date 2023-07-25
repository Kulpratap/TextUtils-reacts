import React from 'react'

function About(props) {
  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='dark'?'#a08e8e':'white', color:props.mode==='dark'?'white':'black'}}>
        <h1>About us</h1>
        <p>This app is used to manipulate the text easily you can use this app for your ease and easily manipulate the text .
        <br></br>This application is created using Reactjs and Bootstrap .</p>
      </div>
    </>
  )
}

export default About
