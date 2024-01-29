import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#4B4A54' : 'white',
    }

    return (
        <div className='container' style={{ borderRadius: '5px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)', ...myStyle }}>
            <h1 className='my-3' style={{ margin: '10px 15px' }}>About Us</h1>
            <div className="container my-3" style={{ height: '78vh' }}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Unlock Text Insights</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Textutils empowers you to gain valuable insights from your text effortlessly. Whether you need word count, character count, or
                                detailed analysis, Textutils provides a quick and efficient way to extract meaningful information from your text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Discover Free Features</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtils offers a suite of free features, making it a versatile character counter tool. Instantly access character count and word count statistics for your text. Whether you're tracking the number of words or characters, TextUtils provides accurate and reliable information. It's the ideal tool for composing text within specific word or character limits.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Enjoy Browser Compatibility</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtils is designed for seamless use across various web browsers, including Safari, Chrome, and Firefox. Whether you're counting characters on social media platforms, blogs, books, Excel documents, PDFs, or essays, this word counter software ensures compatibility and reliable performance in any browser.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}