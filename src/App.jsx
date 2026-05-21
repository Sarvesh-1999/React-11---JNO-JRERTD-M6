import { useState } from "react";
import ClassBased from "./allTopics/01_Types-of-components/ClassBased";
import FunctionBased from "./allTopics/01_Types-of-components/FunctionBased";
import CounterFBC from "./allTopics/02_States/CounterFBC";
import Heart from "./allTopics/02_States/Heart";
import StatesInCBC from "./allTopics/02_States/StatesInCBC";
import StatesInFBC from "./allTopics/02_States/StatesInFBC";
import ToggleComponent from "./allTopics/02_States/Toggle";
import Parent1 from "./allTopics/03_Props/Parent1";
import DrillingParent from "./allTopics/04_PropsDrilling/DrillingParent";
import CallbackParent from "./allTopics/05_callbacks/CallbackParent";
import UpliftingParent from "./allTopics/06_StateUplifting/UpliftingParent";
import UserLists from "./allTopics/07_Lists/UserLists";
import ControlledForms1 from "./allTopics/08_ControlledForms/ControlledForms1";
import ControlledForms2 from "./allTopics/08_ControlledForms/ControlledForms2";
import Card from "./allTopics/09_ReactCss/Card";
import InlineCss from "./allTopics/09_ReactCss/InlineCss";
import TodoWrapper from "./allTopics/10_todoApp/TodoWrapper";
import UncontrolledForms from "./allTopics/11_UncontrolledForms/UncontrolledForms";
import LifeCycleInCBC from "./allTopics/12_LifeCycle/LifeCycleInCBC";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      {/* <FunctionBased /> */}
      {/* <ClassBased /> */}
      {/* <StatesInFBC /> */}
      {/* <Heart /> */}
      {/* <ToggleComponent /> */}
      {/* <CounterFBC /> */}
      {/* <StatesInCBC /> */}
      {/* <Parent1 /> */}
      {/* <DrillingParent /> */}
      {/* <CallbackParent /> */}
      {/* <UpliftingParent /> */}
      {/* <UserLists/> */}
      {/* <ControlledForms1/> */}
      {/* <ControlledForms2 /> */}
      {/* <InlineCss /> */}
      {/* <Card /> */}
      {/* <TodoWrapper /> */}
      {/* <UncontrolledForms /> */}

      <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleInCBC />}
    </>
  );
};

export default App;
