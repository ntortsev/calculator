import React from 'react';

const arrButtons = [
  'C',
  '()',
  '%',
  '/',
  '7',
  '8',
  '9',
  'x',
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

  const onClickButton = (btn: string) => {
    setInputValue(inputValue + btn);

    switch (btn) {
      case '+':
        return console.log('плюс');
      case '-':
        return console.log('минус');
      case 'x':
        return console.log('умножить');
      case '/':
        return console.log('разделить');
      case '=':
        return console.log('равно');
      case '%':
        return console.log('процент');
      case 'C':
        return setInputValue('');
      case '.':
        return console.log('дробное число');
      case '+/-':
        return console.log('смена знака');
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
        <input className="window__input--bottom" type="text" disabled />
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
