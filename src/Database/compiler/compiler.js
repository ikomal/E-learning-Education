import React, { useState, useRef } from 'react';
import './compiler.css'
function CodeEditor() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const outputRef = useRef(null);

  const handleRunCode = () => {
    const outputDocument = outputRef.current.contentDocument;
    outputDocument.body.innerHTML = html + '<style>' + css + '</style>';
    const script = document.createElement('script');
    script.text = js;
    outputDocument.body.appendChild(script);
  };

  return (
    <div className='container-compiler'>
        <div className='.left-compiler'>
<label>Html</label>
        <textarea
        className="html-code"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      ></textarea>
           <label>Css</label>

      <textarea
        className="css-code"
        value={css}
        onChange={(e) => setCss(e.target.value)}
      ></textarea>
           <label>JavaScript</label>


      <textarea
        className="js-code"
        value={js}
        onChange={(e) => setJs(e.target.value)}
      ></textarea>

        </div>
     

     <div className='right-compiler'>
     <label>JavaScript</label>
      <div className='right-op'>

      <button className='btn' onClick={handleRunCode}>Run</button>

<iframe  className='op' ref={outputRef} title="output" ></iframe>
      </div>

     

     </div>
    
    </div>
  );
}

export default CodeEditor;