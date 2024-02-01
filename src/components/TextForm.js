import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UPPERCASE.", 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase.", 'success');
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared successfully.", 'success');
    }

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    document.getSelection().removeAllRanges();
                    props.showAlert("Text copied to clipboard.", 'success');
                })
                .catch((err) => {
                    props.showAlert("Error copying text to clipboard.", 'danger');
                });
        } else {
            try {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                props.showAlert("Text copied to clipboard.", 'success');
            } catch (err) {
                props.showAlert("Error copying text to clipboard.", 'danger');
            }
        }
    };

    const handleExtraSpaces = () => {
        let newText = text.trim().replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra spaces removed successfully.", 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const countWords = (text) => {
        const words = text.trim().split(/\s+/);
        return text.trim() === '' ? 0 : words.length;
    };

    const calculateReadingTime = (wordCount, wordsPerMinute) => {
        const minutesToRead = wordCount / wordsPerMinute;
        const secondsToRead = minutesToRead * 60;
        return secondsToRead;
    };

    const formatTime = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = Math.floor(seconds % 60);

        let formattedTime = '';

        if (hours > 0) {
            formattedTime += `${hours}h `;
        }

        if (minutes > 0 || hours > 0) {
            formattedTime += `${minutes}m `;
        }

        formattedTime += `${remainingSeconds}s`;

        return formattedTime.trim();
    };

    const [text, setText] = useState("");

    const wordsPerMinute = 238;

    const wordCount = countWords(text);
    const secondsToRead = calculateReadingTime(wordCount, wordsPerMinute);
    const formattedTime = formatTime(secondsToRead);
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ margin: '17px 0' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows='10' style={{
                        backgroundColor: props.mode === 'dark' ? '#FFF6F9' : 'white', minHeight: '150px', overflowY: 'auto'
                    }}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={!text.trim()}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} disabled={!text.trim()}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} disabled={!text.trim()}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopy} disabled={!text.trim()}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} disabled={!text.trim()}>Clear Text</button>
            </div>
            <div className="container my-3" id='showText' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{formattedTime} estimated reading time</p>
                <h3>Preview</h3>
                <p style={{ border: '1px solid #ccc', padding: '7px', borderRadius: '5px', backgroundColor: 'rgba(210, 210, 229)', color: props.mode === 'dark' ? 'black' : 'black' }}>{text.length > 0 ? text : "Nothing to preview"}
                </p>
            </div>
        </>
    )
}