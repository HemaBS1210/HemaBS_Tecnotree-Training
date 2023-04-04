import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  function appendToResult(value) {
    setResult(result + value);
  }

  function clearResult() {
    setResult('');
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function operate(operator) {
    const lastChar = result.slice(-1);
    if (lastChar === operator) return;
    if (/[+*/%-]/.test(lastChar)) {
      setResult(result.slice(0, -1) + operator);
    } else {
      setResult(result + operator);
    }
  }

  function calculateResult() {
    try {
      const resultValue = eval(result);
      setResult(resultValue.toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div className="calculator">
      <input className='imput' type="text" value={result} onChange={(e) => setResult(e.target.value)} />
      <div className="button-row">
        <button className="operator" onClick={() => clearResult()}>
          C
        </button>
        <button className="operator" onClick={() => backspace()}>
          CE
        </button>
        <button className="operator" onClick={() => operate('%')}>
          %
        </button>
        <button className="operator" onClick={() => operate('/')}>
          /
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToResult('7')}>7</button>
        <button onClick={() => appendToResult('8')}>8</button>
        <button onClick={() => appendToResult('9')}>9</button>
        <button className="operator" onClick={() => operate('*')}>
          *
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToResult('6')}>6</button>
        <button onClick={() => appendToResult('5')}>5</button>
        <button onClick={() => appendToResult('4')}>4</button>
        <button className="operator" onClick={() => operate('-')}>
          -
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToResult('3')}>3</button>
        <button onClick={() => appendToResult('2')}>2</button>
        <button onClick={() => appendToResult('1')}>1</button>
        <button className="operator" onClick={() => operate('+')}>
          +
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToResult('0')}>0</button>
        <button onClick={() => appendToResult('.')}>.</button>
        <button className="operator" onClick={() => calculateResult()}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
