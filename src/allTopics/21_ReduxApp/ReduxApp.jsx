import { Provider } from "react-redux";
import ReduxCounter from "./ReduxCounter";
import { store } from "./store";

const ReduxApp = () => {
  return (
    <div>
      <h1>Learn Redux Toolkit</h1>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    </div>
  );
};

export default ReduxApp;
