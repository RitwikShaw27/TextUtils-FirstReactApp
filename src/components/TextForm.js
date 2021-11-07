import React, {useState} from 'react'


export default function TextForm(props) {

    const handleOnChange = (event)=>{
        //console.log("On change was clicked");
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase !", "success");
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase !", "success");
    }

    const handleClr = ()=>{        
        let newText = ("");
        setText(newText);
        props.showAlert("Text cleared !", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard !!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed !!", "success");
    }

    // const [count, setCount] = useState(0);   HOOKS   DECLARATION OF A NEW STATE VARIABLE, WHICH WE'LL CALL "count" and setCount function will be used to update the text
    const [text, setText] = useState('');
    // text = "New Text";
    // setText("new text");
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>             
        <div className="mb-3">             
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2 my-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
        <button className="btn btn-warning mx-2 my-2" onClick={handleLoClick}>CONVERT TO LOWERCASE</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClr}>CLEAR TEXT</button>
        <button className="btn btn-info mx-2 my-2" onClick={handleCopy}>COPY TEXT</button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces}>REMOVE EXTRA SPACE</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text in the textbox above to preview here"}</p>
    </div>
    </>
    )
}
