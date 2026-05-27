import { useContext } from "react";
import { MyContext } from "./ContextExample";
const Hero = () => {

  let data = useContext(MyContext);
  console.log(data);

  return (
    <div>
      <h1>Hero Component</h1>
    </div>
  );
};

export default Hero;
