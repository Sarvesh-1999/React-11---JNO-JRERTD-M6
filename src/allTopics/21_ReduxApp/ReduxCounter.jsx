import { useSelector, useDispatch } from "react-redux";
import { incre, decre, reset } from "./counterSlice";

const ReduxCounter = () => {
  //! useSelector() used to access redux state and returns it
  let count = useSelector((state) => state.counter);

  //! useDispatch() returns dispatch function which is used to call actions
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux-Counter {count}</h3>
      <button onClick={() => dispatch(incre(100))}>increment</button>
      <button onClick={() => dispatch(decre(5))}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default ReduxCounter;
