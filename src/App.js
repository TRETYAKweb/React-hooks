import React from 'react';

// import { List } from './List';

function App() {
  const [num, setNum] = React.useState([1, 2, 3, 4, 5]);

  const ulRef = React.useRef();
  const timerRef = React.useRef();

  const addNum = () => {
    setNum((prev) => [...prev, prev[prev.length - 1] + 1]);
    console.log(timerRef.current);
  };

  const start = () => {
    timerRef.current = setInterval(addNum, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  const handleScroll = (e) => {
    console.log(`scroll`);
  };

  const removeScrol = () => {
    ulRef.current.removeEventListener('scroll', handleScroll);
  };

  React.useEffect(() => {
    ulRef.current.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ul ref={ulRef}>
        {num.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
      <button onClick={addNum}>Добавить число</button>
      <button onClick={removeScrol}>Не следить</button>
      <button onClick={start}>Старт</button>
      <button onClick={stop}>Стоп</button>
    </>
  );
}

export default App;
