import { createContext, useState } from "react";

//! STEP 1
export const CounterContext = createContext();

//! STEP 2
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement,reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
