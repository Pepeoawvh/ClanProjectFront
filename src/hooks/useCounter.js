import { useState } from 'react';

export function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    const newCount = count + 1;
    if (newCount > 5) {
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

  return { count, increment, decrement };
}