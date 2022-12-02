import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = 'new text'  // wrong way to change state
    // setText('new text'); // correct way
    return (
        <>
            <div className='container'  style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    {/* <label htmlFor="myBox">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>
            <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text to preview"}</p>
            </div>
        </>
    )
}
