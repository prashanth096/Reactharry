import React,{useState}from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const handleUpClick = ()=>
    {
        let temp =text.toUpperCase();
        setText(temp);
        console.log("Clicked on button");

     }
     const handleLowClick = ()=>
     {
         let temp =text.toLowerCase();
         setText(temp);
         console.log("Clicked on button");
 
      }
    
    const [text,setText] = useState(' ');
    
    return (
        <>
        <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
       </div>
       <div className="container my-3">
       <h1>your text summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
       </div>
       </>
    )
}
TextForm.prototype={
    heading:PropTypes.string
}
