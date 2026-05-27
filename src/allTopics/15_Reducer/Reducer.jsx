import { useReducer } from "react";
import { reducerFunc, initialState } from "./counterState";

const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <div>
      <h1>Learn useReducer {count}</h1>
      <button onClick={() => dispatch("incre")}>increment</button>
      <button onClick={() => dispatch("decre")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Reducer;
