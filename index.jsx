import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me1
      </button>
    </div>
  );
}

render(
    <App />,
  document.querySelector('#root')
);
