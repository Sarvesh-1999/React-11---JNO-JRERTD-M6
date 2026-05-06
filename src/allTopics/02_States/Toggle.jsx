import { useState } from "react";

const ToggleComponent = () => {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle((prev) => !prev);
  };
  
  return (
    <>
      <button onClick={updateToggle}>Toogle me</button>
      {toggle && <h1>toogle Example</h1>}
    </>
  );
};

export default ToggleComponent;
