// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { useState } from 'react';

function TextForm(props) {
  const[text,setText]=useState('');
  
  
  
  
  const upper= () =>{
    
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper case","success");
    

  }
 

  const lower= () =>{
    
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower case","success");
    

  }
 
  
  const handleonchange=(event)=>{
    
    setText(event.target.value);
    
  }
  const clear=()=>{
    setText("");
    props.showAlert("Text Cleared","success");
  }
  const copy=(event)=>{
    let text=document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!","success");

  }
  const handleextraspace=()=>{
    
    let newtx =text.split(/[ ]+/);
    setText(newtx.join(" "));
    props.showAlert("Extra Spaces Removed","success");
    
  }
  
  return (
    <div>

  

<div className="text" >
  <h2 style={{color:props.mod==='light'?'black':'white'}}>{props.heading}</h2>
    <textarea className="form-control" id="text" rows="10" style={{backgroundColor:props.mod==='light'?'white':'#042743',
  color:props.mod==='light'?'black':'white',border:props.mod==='light'?'4px groove blue':'4px groove white'}} value ={text} onChange={handleonchange}></textarea>
</div>
<div style={{color:props.mod==='light'?'black':'white'}}>
  <button className='btn btn-primary mx-2 my-4' onClick={upper} style={{border:props.mod==='light'?'4px groove grey':'4px groove white'}}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-2 my-4' onClick={lower} style={{border:props.mod==='light'?'4px groove grey':'4px groove white'}}>Convert to Lowercase</button>
  <button type="button" className="btn btn-danger mx-2 my-4" onClick={clear} style={{border:props.mod==='light'?'4px groove grey':'4px groove white'}}>Clear</button>
  <button type="button" className="btn btn-primary mx-2 my-4" onClick={copy} style={{border:props.mod==='light'?'4px groove grey':'4px groove white'}}>Copy Text</button>
  <button type="button" className="btn btn-primary mx-2 my-4" onClick={handleextraspace} style={{border:props.mod==='light'?'4px groove grey':'4px groove white'}}>Remove Extra Space</button>
  <h2 className="container my-2">Your Text Summary :</h2>
  <ul>
  <li>
  <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
  </li>
  <li>
  <p>Reading time : {text.length>0?text.split(" ").length*0.008:0} minutes</p>
  </li>
  </ul>
  <h2>Preview :</h2>
  <p>{text.length>0?text:"Enter something in above textbox for preview"}</p>
</div>
</div>
      
    );
}
export default TextForm;
