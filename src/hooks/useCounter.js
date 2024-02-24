import { useState } from 'react';

export function useCounter(initialValue, cuposMaximos) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    const newCount = count + 1;
    if (newCount > cuposMaximos) {
      return;
    }
    setCount(newCount);
  }

  function decrement() {
    const newCount = count - 1;
    if (newCount < 1) {
      return;
    }
    setCount(newCount);
  }

  function reset () {
     setCount(initialValue)
  }

  return { count, increment, decrement, reset };
}