import { useEffect, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const [initailRender, setInitialRender] = useState(true);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    if (initailRender) {
      setInitialRender(false);
      return;
    }
    console.log("Component Updated");
  }, [count]);

  return (
    <>
      <h1>Learn LifeCycle in Function Based</h1>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </>
  );
};

export default LifeCycleInFBC;
