/* eslint-disable no-eval */
import React, { useState } from 'react';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState(0);

  function display(symbol) {
    setExpression((prevValue) => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }

        setExpression(newValue);
      } else {
        if (prevValue) {
          prevValue = prevValue + '';
          let valArr = prevValue.split(/[+/*-]/g);
          console.log('valArr ' + JSON.stringify(valArr));
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === '.') {
            console.log('symbol = empty ');
            symbol = '';
          }
        }

        setExpression(
          (prevValue + symbol).replace(/^0/g, '').replace(/\.+/g, '.')
        );
      }
    });
  }

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression(eval(expression));
  };

  const allClear = () => {
    setExpression('');
    setAnswer(0);
  };

  const clear = () => {
    setExpression((prev) => {
      setAnswer(0);
      console.log(prev);
      prev = prev + '';
      return prev
        .split('')
        .slice(0, prev.length - 1)
        .join('');
    });
  };

  return (
    <div className="row text-grays">
      <div className="col-10 col-sm-8 col-md-6 col-lg-5 mx-auto shadow-lg border-colored">
        <div className="row shadow-lg">
          <div className="col-12 d-flex justify-content-end bg-grad fs-1 text-whites py-4 px-2">
            <div className="row display">
              <div id="display" class="col-11 text-end">
                {expression === '' ? 0 : expression}
              </div>
              <div className="col-11 text-end fs-4">
                {answer.length === 0 ? 0 : answer}
              </div>
            </div>
          </div>
          <div
            id="clear"
            onClick={allClear}
            className="pointer col-3 p-3 text-pink border-colored text-center fs-3 bg-gray"
          >
            ac
          </div>
          <div
            id="c"
            onClick={clear}
            className="pointer col-3 p-3 text-pink border-colored text-center fs-3 bg-gray"
          >
            c
          </div>
          <div
            id="divide"
            onClick={() => display('/')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-gray"
          >
            /
          </div>
          <div
            id="multiply"
            onClick={() => display('*')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-gray"
          >
            *
          </div>
          <div
            id="seven"
            onClick={() => display('7')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            7
          </div>
          <div
            id="eight"
            onClick={() => display('8')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            8
          </div>
          <div
            id="nine"
            onClick={() => display('9')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            9
          </div>
          <div
            id="subtract"
            onClick={() => display('-')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-gray"
          >
            -
          </div>
          <div
            id="four"
            onClick={() => display('4')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            4
          </div>
          <div
            id="five"
            onClick={() => display('5')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            5
          </div>
          <div
            id="six"
            onClick={() => display('6')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            6
          </div>
          <div
            id="add"
            onClick={() => display('+')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-gray"
          >
            +
          </div>
          <div
            id="one"
            onClick={() => display('1')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            1
          </div>
          <div
            id="two"
            onClick={() => display('2')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            2
          </div>
          <div
            id="three"
            onClick={() => display('3')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-white"
          >
            3
          </div>
          <div
            id="decimal"
            onClick={() => display('.')}
            className="pointer col-3 p-3 border-colored text-center fs-3 bg-gray"
          >
            .
          </div>
          <div
            id="zero"
            onClick={() => display('0')}
            className="pointer col-6 p-3 border-colored text-center fs-3 bg-gray"
          >
            0
          </div>
          <div
            id="equals"
            onClick={calculate}
            className="pointer col-6 p-3 border-colored text-center fs-3 bg-grad"
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
