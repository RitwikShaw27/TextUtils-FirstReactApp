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
    }

    // const [count, setCount] = useState(0);   HOOKS   DECLARATION OF A NEW STATE VARIABLE, WHICH WE'LL CALL "count" and setCount function will be used to update the text
    const [text, setText] = useState('Enter text here');
    // text = "New Text";
    // setText("new text");
    return (
    <div>
        <h1>{props.heading}</h1>             
        <div className="mb-3">             
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>

    </div>
    )
}
