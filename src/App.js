import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = evaluate(input);
        if (evalResult === Infinity) {
          setResult('Infinity');
        } else if (isNaN(evalResult)) {
          setResult('NaN');
        } else {
          setResult(evalResult.toString());
        }
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator App</h1>
      <input type="text" id="input-field" value={input} readOnly />
      <div id="result">{result}</div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((buttonText) => (
          <button key={buttonText} onClick={() => handleClick(buttonText)}>
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
