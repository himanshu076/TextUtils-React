import React, {useState} from 'react'

// console.log(useState("Enter text here2"));

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleOnChange");
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const changeTextStyle = () => {
        // let newTextStyle = text;
        // newTextStyle.style.fontFamily = "monospace";
        setFontFamily('Monospaced font');
    }
    
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
        
    }

   const handleCopy = () => {
    let text = document.getElementById("myBox")
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
   }

   const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text Extra spaces removed !", "success");
   }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        // setText("You have clicked on handleOnChange");
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("Uppercase was clicked");
        setText(event.target.value);
    }
    // const [text, setText] = useState("Enter text here");
    const [text, setText] = useState("");
    const [fontFamily, setFontFamily] = useState("Arial");
    // text = "vhgdjbdb"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode ==='dark'?'#fff':'#212529'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{fontFamily, backgroundColor: props.mode ==='dark'?'#212529':'#fff', color: props.mode ==='dark'?'#fff':'#212529'}} className="form-control" value={text} onChange={handleOnChange}f id="myBox" rows="8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={changeTextStyle}>Change font Style</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick}>CLear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'#fff':'#212529'}}>
                <h2>Your text summery</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Approx. {0.008 * text.split(" ").length} Minutes reading time</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
  )
}
