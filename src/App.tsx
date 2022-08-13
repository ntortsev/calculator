import React from 'react';

const arrButtons = [
  'C',
  '()',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '+/-',
  '0',
  '.',
  '=',
];

function App() {
  const [inputValue, setInputValue] = React.useState('');
  const [res, setRes] = React.useState(0);
  const onClickButton = (btn: string) => {
    if (btn !== '=') {
      setInputValue(inputValue + btn);
      switch (btn) {
        case '+':
          return console.log('плюс');
        case '-':
          return console.log('минус');
        case '*':
          return console.log('умножить');
        case '/':
          return console.log('разделить');
        case '=':
          return console.log('равно');
        case 'C':
          setInputValue('');
          setRes(0);
          break;
        case '.':
          return console.log('дробное число');
      }
    } else {
      setInputValue(eval(inputValue));
      setRes(eval(inputValue));
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper__window">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="window__input--top"
          type="text"
        />
        <input value={res % 1 === 0 ? res : res.toFixed(2)} className="window__input--bottom" type="text" disabled />
      </div>
      <div className="wrapper__buttons">
        {arrButtons.map((btn, index) => {
          return (
            <button onClick={() => onClickButton(btn)} key={index} className="button">
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
