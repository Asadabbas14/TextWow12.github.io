import React, {useState} from 'react'

export default function Text(props) {
    const [text, setText] = useState("");
    const handleupClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowecase", "success");
    }
    const handleClear = ()=>{
        let newText = "";
        setText(newText);
    }
    const handelOnchange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnchange} style={{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode=== 'dark'?'white':'black' }} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-2"  style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h2>Your text summary is here</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing above to preview it here"}</p>
    </div>
    </>
  )
}
