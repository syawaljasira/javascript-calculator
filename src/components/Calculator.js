import React, { useState } from 'react';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState('0');

  const display = (val) => {
    setExpression((prev) => prev + val);
    if (expression[expression.length - 1] === '=') {
      if (/[0-9.]/.test(val)) {
        setExpression(val);
      } else {
        setExpression(answer + val);
      }
    }
  };

  const calculate = () => {
    // eslint-disable-next-line no-eval
    const equal = eval(expression);
    setAnswer(equal);
    setExpression((prev) => prev + '=');
  };

  const allClear = () => {
    setExpression('');
    setAnswer(0);
  };

  const clear = () => {
    setExpression((prev) => {
      return prev
        .split('')
        .slice(0, prev.length - 1)
        .join('');
    });
    setAnswer(0);
  };

  return (
    <div>
      <div className="row border border-dark">
        <div className="col-12 text-end bg-dark text-warning py-4 px-2">
          <div className="row">
            <div className="col-12">
              {expression.length === 0 ? '.' : expression}
            </div>
            <div id="display" className="col-12 fs-4 text-light align-self-end">
              {' '}
              {answer}{' '}
            </div>
          </div>
        </div>
        <div
          id="all-clear"
          onClick={allClear}
          className="col-3 p-3 border border-dark text-center fs-3 bg-danger"
        >
          ac
        </div>
        <div
          id="clear"
          onClick={clear}
          className="col-3 p-3 border border-dark text-center fs-3 bg-danger"
        >
          c
        </div>
        <div
          id="divide"
          onClick={() => display('/')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          /
        </div>
        <div
          id="multiply"
          onClick={() => display('*')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          *
        </div>
        <div
          id="seven"
          onClick={() => display('7')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          7
        </div>
        <div
          id="eight"
          onClick={() => display('8')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          8
        </div>
        <div
          id="nine"
          onClick={() => display('9')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          9
        </div>
        <div
          id="subtract"
          onClick={() => display('-')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          -
        </div>
        <div
          id="four"
          onClick={() => display('4')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          4
        </div>
        <div
          id="five"
          onClick={() => display('5')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          5
        </div>
        <div
          id="six"
          onClick={() => display('6')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          6
        </div>
        <div
          id="add"
          onClick={() => display('+')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          +
        </div>
        <div
          id="one"
          onClick={() => display('1')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          1
        </div>
        <div
          id="two"
          onClick={() => display('2')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          2
        </div>
        <div
          id="three"
          onClick={() => display('3')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          3
        </div>
        <div
          id="decimal"
          onClick={() => display('.')}
          className="col-3 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          .
        </div>
        <div
          id="zero"
          onClick={() => display('0')}
          className="col-6 p-3 border border-dark text-center fs-3 bg-secondary"
        >
          0
        </div>
        <div
          id="equals"
          onClick={calculate}
          className="col-6 p-3 border border-dark text-center fs-3 bg-primary"
        >
          =
        </div>
      </div>
    </div>
  );
}

export default Calculator;
