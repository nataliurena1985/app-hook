import { useState } from "react";

export const useCouter = (initialState = 100) => {
  const [counter, setCounter] = useState(initialState); // 10

  const reset = () => {
    setCounter(initialState);
  };

  const increment = (factor) => {
    setCounter(counter + factor);
  };

  const decrement = (factor) => {
    setCounter(counter - factor);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
