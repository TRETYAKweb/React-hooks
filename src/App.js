import React from 'react';

import { List } from './List';

function App() {
  const [visibleLest, setVisibleList] = React.useState(true);

  const toogleVisibleList = () => {
    setVisibleList((visible) => !visible);
  };

  return (
    <>
      {visibleLest && <List />}
      <button onClick={toogleVisibleList}> Показать / скріть список </button>
    </>
  );
}

export default App;
