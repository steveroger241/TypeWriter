import { useState } from 'react';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 

const customStyle = {
    ...atomOneDark,
    hljs: {
        ...atomOneDark.hljs,
        background: 'none', 
    },
    'hljs-keyword': {
        color: '#f6ff00', 
    },
    'hljs-literal': {
        color: '#008000', 
    },
    'hljs-selector-tag': {
        color: '#FFFF00', 
    },
    'hljs-string': {
        color: '#00FFFF', 
    },
    'hljs-comment': {
        color: '#05bb54', 
    },
    'hljs-variable': {
        color: '#FF00FF', 
    },
    'hljs-template-variable': {
        color: '#FF00FF', 
    },
    'hljs-function': {
        color: '#00FFFF', 
    },
    'hljs-name': {
        color: '#ae95ff', 
    },
    'hljs-title': {
        color: '#FFA500', 
    },
    'hljs-type': {
        color: '#FFA500', 
    },
    'hljs-number': {
        color: '#008000', 
    },
    'hljs-symbol': {
        color: '#FFA500', 
    },
    'hljs-bullet': {
        color: '#FFA500', 
    },
    'hljs-link': {
        color: '#0000FF', 
    },
    'hljs-meta': {
        color: '#FFA500', 
    },
    'hljs-selector-id': {
        color: '#FFFF00', 
    },
    'hljs-selector-class': {
        color: '#FFFF00', 
    },
    'hljs-emphasis': {
        fontStyle: 'italic', 
    },
    'hljs-strong': {
        fontWeight: 'bold', 
    },
};

function App() {
    const [text, setText] = useState('');
    const [values, setValues] = useState('');

    function run() {
        let inputString = text;
        let index = 0;

        function outputString() {
            if (index < inputString.length) {
                setValues((prevValues) => prevValues + inputString[index]);
                index++;
            } else {
                clearInterval(timer);
            }
        }

        const timer = setInterval(outputString, 50);
    }

    return (
        <div className='container'>
            <textarea
                className='textarea'
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows='10'
                cols='30'
                placeholder='Enter your text here...'
            ></textarea>

            <button className='button' onClick={run}>Run</button>

            <SyntaxHighlighter language='javascript' style={customStyle} className='output'>
                {values}
            </SyntaxHighlighter>

        </div>
    );
}

export default App;