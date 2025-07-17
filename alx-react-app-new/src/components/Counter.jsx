import { useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(count + 1);
    };

    const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };


    return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button 
          onClick={decrement} 
          style={{ margin: '0 10px', padding: '8px 16px' }}
        >
          Decrement
        </button>
        <button 
          onClick={reset} 
          style={{ margin: '0 10px', padding: '8px 16px' }}
        >
          Reset
        </button>
        <button 
          onClick={increment} 
          style={{ margin: '0 10px', padding: '8px 16px' }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}


export default Counter;