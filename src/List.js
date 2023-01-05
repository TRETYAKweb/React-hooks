import React from 'react';

// export class List extends React.Component {
//   state = {
//     numbers: [1, 2, 43, 5, 6],
//   };

//   handleClick = () => {
//     const randNumber = Math.round(Math.random() * 10);
//     this.setState({ numbers: [...this.state.numbers, randNumber] });
//   };

//   componentDidMount() {
//     console.log(`Компонент был добавлен`);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log(prevProps, prevState);
//     // console.log(`Next Props & state`);
//     // console.log(this.props, this.state);

//     if (this.state.numbers.length !== prevState.numbers.length) {
//       console.log(`Список обновился`);
//     }
//   }

//   componentWillUnmount() {
//     console.log(`Компонент будет удален`);
//   }

//   render() {
//     return (
//       <>
//         <ul>
//           {this.state.numbers.map((it, index) => (
//             <li key={index}>{it}</li>
//           ))}
//         </ul>
//         <button onClick={this.handleClick}>Добавить число</button>
//       </>
//     );
//   }
// }

export const List = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
  const [count, setCount] = React.useState(0);

  const addNum = () => {
    const randNumber = Math.round(Math.random() * 100);
    setNumbers([...numbers, randNumber]);
  };

  React.useEffect(() => {
    console.log(`Компонент обновился`);

    return () => {
      console.log(`Компонент будет удален`);
    };
  }, []);

  React.useEffect(() => {
    console.log(`Счётчик обновился: ${count}`);
  }, [count]);

  React.useEffect(() => {
    console.log(`Добавилось новое число: ${numbers[numbers.length - 1]}`);
  }, [numbers]);

  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <ul>
        {numbers.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
      <button onClick={addNum}>Добавить число</button>
    </>
  );
};
