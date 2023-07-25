import React ,{useState}from "react";

export default function TextForm(props) {
  const handleUpperClick =()=>{
    setText(text.toUpperCase())
    props.showalert("Converted to Uppercase!","success")
  }
  const handleLowerClick =()=>{
    setText(text.toLowerCase())
    props.showalert("Converted to lowercase!","success")
  }
  const handleOnChange =(event)=>{
    setText(event.target.value )
  }
  const handleClearClick=()=>{
    setText(" ");
    props.showalert("Text Cleared!","success")
  }

  const handleCopyClick =()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to Clipboard!","success")
  }
  const handleRemoveExtraSpaces= ()=>{
    let newText=(text.split(/[ ]+/))
    setText(newText.join(" "))
    props.showalert("Extra spaces removed!","success")
  }
  const[text,setText]=useState('');
  const countChar=(str)=>{
    let remText = str.replace(/\s/g, "")
    return remText.length;
  }

 const countWord=(str)=> {  
    let count = 0;
    let split = str.split(' ');

    for (var i = 0; i < split.length; i++) {
        if (split[i] !== "") {
            count += 1;
        }
    }
    return count;
}
const extractEmails = () => {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  }


  return (
    <>
  <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}} >
  <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#a08e8e':'white', color:props.mode==='dark'?'white':'black'}}
          rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Summary</h2>
      <p>{countWord(text)} words and {countChar(text)} characters in your text.</p>
      <p>{countWord(text)*0.008} Minutes read</p>
      <h2>{countChar(text)>0?'Text Summary':'Enter something to preview'}</h2>
      <p>{text}</p>
      <div className="mb-3">
            <h2>Email Id's in Text</h2>
            <p>{extractEmails()}</p>
            </div>
    </div>
    {/* <div className="container" >
      <footer><p style={{color:props.mode==='dark'?'white':'black',textAlign:"center"}} >Copyright@2023</p></footer>
    </div> */}
    </>
  );
}
