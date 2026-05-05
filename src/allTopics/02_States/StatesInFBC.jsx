import { useState } from "react";

const StatesInFBC = () => {
  const [count, setCount] = useState(0); // [ud, f]

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Learn States in Function Based</h1>
      <h2>Counter :{count}</h2>
      <button onClick={updateCount}>Click</button>
    </>
  );
};

export default StatesInFBC;

//! WHAT IS STATE ?
// In React, state is a component's "memory". It is an object used to store data that changes over time, such as user input, a shopping cart, or whether a toggle is active.

//! WHAT IS useState ?
// useState is a React Hook that lets you add a state variable to your component.

//! How it works (The Syntax)
// When you use it, you always returns an array consists of :
// 1) The current value (what's currently in the memory box).
// 2) A function to update it (the tool to put something new in the box).