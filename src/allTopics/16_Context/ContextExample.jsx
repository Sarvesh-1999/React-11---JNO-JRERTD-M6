import { createContext } from "react";

//! STEP 1: CREATE A CONTEXT
export const MyContext = createContext(); // returns context object

//! STEP 2: PROVIDE A CONTEXT
const ContextProvider = (props) => {
  console.log(props); // {children : {}}

  let str = "Hii!! Im coming from Context";
  return (
    <>
      <MyContext.Provider value={str}>
        {props.children}
      </MyContext.Provider>
    </>
  );
};
export default ContextProvider;
